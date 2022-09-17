import styles from "../styles/LoggedIn.module.css"

export default function LoggedIn() {
    return (
      <section className={styles.main}>
        <p>when logged in</p>
        <h1>We should have a chakra ui table here with all the previous proposals.<br />
        Similar to this table: https://thirdweb.com/contracts</h1>
      </section>
    )
  }