import styles from "../styles/LoggedIn.module.css"
import PreviousProposals from "./previousProposals";

export default function LoggedIn() {
    return (
      <section className={styles.main}>
        <p>when logged in</p>
        <h1>We should have a chakra ui table here with all the previous proposals.<br />
        The table below should look like thirdwebs instead: https://thirdweb.com/contracts</h1>
        <PreviousProposals />
      </section>
    )
  }