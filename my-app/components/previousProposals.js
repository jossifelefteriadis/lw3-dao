import { useContract, useContractRead } from "@thirdweb-dev/react"
// import { JsonLiteral } from "@thirdweb-dev/sdk/dist/declarations/src/schema";
import styles from "../styles/PreviousProposals.module.css";

export default function PreviousProposals() {

  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393");
  const { data, isLoading, error } = useContractRead(
    contract,
    "proposals",
    0,
  );
    console.log(data.title)
    return (
      <section className={styles.main}>
        <p>Previous Proposals</p>
        {
          isLoading ? <h1>Loading Proposal.....</h1>
            : <div></div> 
        }
      </section>
    )
  }