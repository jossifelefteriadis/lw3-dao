import Nav from "../components/nav";
import CreateProposal from "../components/createproposal";

export default function createProfile() {
  return (
    <section>
      <Nav />
      <section>
        <CreateProposal />
      </section>
    </section>
  );
}
