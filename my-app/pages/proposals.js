import PreviousProposals from "../components/previousProposals"
import { useState } from "react";

export default function Home() {
  const address = useState(true);
  return (
    <section>
      {address ? <PreviousProposals /> : <p>You don't have an nft</p>}
    </section>
  )
}