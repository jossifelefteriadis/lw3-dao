import Nav from "../components/nav";
import PreviousProposals from "../components/previousProposals";

export default function createProfile() {
  return (
    <section>
      <Nav />
      <section>
        <PreviousProposals />
      </section>
    </section>
  );
}
