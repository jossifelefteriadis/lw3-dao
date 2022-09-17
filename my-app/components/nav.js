import { ConnectWallet } from "@thirdweb-dev/react";


export default function Nav() {
    return (
      <section>
        <ConnectWallet accentColor="#162C68" colorMode="dark" />
      </section>
    )
  }