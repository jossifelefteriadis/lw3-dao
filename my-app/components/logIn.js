import styles from "../styles/LogIn.module.css";
import About from "./about"

export default function LogIn() {
    return (
<section className={styles.main}>
        <About />
        <section className={styles.loggedInInfo}>
        <section className={styles.loggedInInfoSteps}>
          <h2>CONNECT WALLET</h2>
          <section>
            <p>
              Make sure you are signed in with the correct wallet so you can 
              participate with your vote in different proposals
            </p>
          </section>
        </section>
        {/* The boxes below should be more beautiful and a carousel */}
        <section className={styles.loggedInInfoSteps}>
          <h2>VOTE ON PROPOSALS</h2>
          <section>
            <p>
              Once your wallet is connected, you will be able to see all
              the ongoing proposals and vote ( depending if you qualify ).
              You will also be able to see older proposals that are closed
              and their results
            </p>
          </section>
        </section>
        <section className={styles.loggedInInfoSteps}>
          <h2>CREATE A PROPOSAL</h2>
          <section>
            <p>
              - Do you have an idea that the community would love? Create a proposal
              and let your frens decide
            </p>
          </section>
        </section>
      </section>
      </section>
    )
  }