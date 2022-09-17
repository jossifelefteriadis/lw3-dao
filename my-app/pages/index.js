import Nav from "../components/nav";
import LoggedIn from "../components/loggedIn";
import LogIn from "../components/logIn";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  return (
    <section>
      <Nav />
      {address ? <LoggedIn /> : <LogIn />}
    </section>
  )
}