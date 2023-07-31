import { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

const usePhantom = () => {
  const { connection } = useConnection();
  const { publicKey, signMessage } = useWallet();

  const sign = useCallback(async () => {
    if (!publicKey || !signMessage) throw new WalletNotConnectedError();

    const date = new Date();
    const encodedMessage = new TextEncoder().encode(
      date.toISOString() + " Cyber Heists NFT Marketplace, Durable Nonce"
    );
    const signedMessage = await signMessage(encodedMessage);
    console.log("signedMessage", signedMessage);
    return signedMessage;
  }, [publicKey, connection]);

  return {
    sign,
  };
};

export default usePhantom;
