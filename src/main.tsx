import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./Providers";
import App from "./App.tsx";

import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
