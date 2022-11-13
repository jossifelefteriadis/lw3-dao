import LogIn from "../components/logIn";
import LoggedIn from "../components/loggedIn";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  return (
    <section>
      {!isConnected ? <LogIn /> : <LoggedIn />}
    </section>
  )
}