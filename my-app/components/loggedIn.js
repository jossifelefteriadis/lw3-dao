import CreateProposal from "../components/createProposal";
import FetchData from "../components/fetchData";

export default function LoggedIn() {
  return (
    <section>
      <CreateProposal />
      <FetchData />
    </section>
  );
}
