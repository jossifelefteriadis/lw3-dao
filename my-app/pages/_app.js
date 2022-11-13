import "../styles/globals.css";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Nav from "../components/nav";

// dotenv.config({ path: ".env" })

const { chains, provider } = configureChains(
  [ chain.polygonMumbai ],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'LearnWeb3 Community DAO',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function MyApp({ Component, pageProps }) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains} showRecentTransactions={true} theme={darkTheme()}>
        <Nav>
          <Component {...pageProps} />
        </Nav>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
