import styles from "../styles/LoggedIn.module.css";
import CreateProposal from "../components/createProposal";
import FetchData from "../components/fetchData";

export default function LoggedIn() {
    return (
      <section className={styles.main}>
        <CreateProposal />
        <FetchData />
      </section>
    )
  }