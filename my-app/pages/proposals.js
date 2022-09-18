import Nav from "../components/nav";
import PreviousProposals from "../components/previousProposals";
// import LogIn from "../components/logIn";
import { useAddress } from "@thirdweb-dev/react";
import Footer from "../components/footer";

export default function Home() {
  const address = useAddress();
  return (
    <section>
      <Nav />
      {address ? <PreviousProposals /> : <p>You don&apos;t have an nft</p>}
      <Footer />
    </section>
  );
}
