import { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  NONCE_ACCOUNT_LENGTH,
  NonceAccount,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { decode, encode } from "bs58";

const TRANSFER_AMOUNT = LAMPORTS_PER_SOL * 0.01;

const nonceKeypair = Keypair.generate();

const useDurableNonce = () => {
  const { connection } = useConnection();
  const { publicKey, wallet, signTransaction } = useWallet();

  const createNonce = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const newNonceTx = new Transaction();
    const rent = await connection.getMinimumBalanceForRentExemption(
      NONCE_ACCOUNT_LENGTH
    );

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();

    newNonceTx.feePayer = publicKey;
    newNonceTx.recentBlockhash = blockhash;
    newNonceTx.lastValidBlockHeight = lastValidBlockHeight;
    newNonceTx.add(
      SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: nonceKeypair.publicKey,
        lamports: rent,
        space: NONCE_ACCOUNT_LENGTH,
        programId: SystemProgram.programId,
      }),
      SystemProgram.nonceInitialize({
        noncePubkey: nonceKeypair.publicKey,
        authorizedPubkey: publicKey,
      })
    );

    // newNonceTx.sign(nonceKeypair, nonceAuthKeypair);

    try {
      const signature = await connection.sendRawTransaction(
        newNonceTx.serialize()
      );
      await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight,
      });
      console.log("Nonce Acct Created: ", signature);
    } catch (error) {
      console.error("Failed to create nonce account: ", error);
      throw error;
    }
  }, [publicKey, connection]);

  const fetchNonceInfo = useCallback(async () => {
    const accountInfo = await connection.getAccountInfo(nonceKeypair.publicKey);
    if (!accountInfo) throw new Error("No account info found");

    const nonceAccount = NonceAccount.fromAccountData(accountInfo.data);
    console.log("Auth:", nonceAccount.authorizedPubkey.toBase58());
    console.log("Nonce:", nonceAccount.nonce);

    return nonceAccount;
  }, [connection]);

  const createTransaction = useCallback(
    async (toPubkey: PublicKey) => {
      if (!publicKey) throw new WalletNotConnectedError();

      const transferIx = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: toPubkey,
        lamports: TRANSFER_AMOUNT,
      });

      const advanceIx = SystemProgram.nonceAdvance({
        authorizedPubkey: publicKey,
        noncePubkey: nonceKeypair.publicKey,
      });

      const sampleTx = new Transaction();

      sampleTx.add(advanceIx, transferIx);
      const nonceAccount = await fetchNonceInfo();
      sampleTx.recentBlockhash = nonceAccount.nonce;

      sampleTx.feePayer = publicKey;
      return encodeTransaction(sampleTx, false);
    },
    [publicKey, fetchNonceInfo]
  );

  const executeTransaction = useCallback(
    async (transaction: string): Promise<string> => {
      if (!publicKey || !signTransaction) throw new WalletNotConnectedError();

      const unsignedTx = await decodeTransaction(transaction);
      const signedTx = await signTransaction(unsignedTx);

      const sig = await connection.sendRawTransaction(signedTx.serialize());
      return sig
    },
    [publicKey, connection, signTransaction]
  );

  return {
    createNonce,
    createTransaction,
    executeTransaction,
  };
};

export default useDurableNonce;

const encodeTransaction = async (
  tx: Transaction,
  requireAllSignatures = true
) => {
  return encode(tx.serialize({ requireAllSignatures }));
};

const decodeTransaction = async (
  serialisedTx: string
): Promise<Transaction> => {
  const decodedData = decode(serialisedTx);
  return Transaction.from(decodedData);
};
