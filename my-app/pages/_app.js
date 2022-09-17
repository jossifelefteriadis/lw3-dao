import "../styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ChakraProvider } from '@chakra-ui/react'

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
    </ChakraProvider>
  );
};

export default MyApp;