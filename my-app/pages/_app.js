import "../styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default MyApp;