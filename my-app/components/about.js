import styles from "../styles/About.module.css";
import Image from "next/image"

export default function About() {
    return (
      <section className="flex flex-row justify-around items-center">
        <div>
          <h1 className=" text-6xl font-semibold">Learn Grow & Contribute</h1>
          <h2 className={`${styles.sub_title} text-3xl mt-4 font-semibold`}>Proof-Of-Work driven community</h2>
        </div>
        <div>
          <Image src="/pair-programming.svg" height={500} width={500}/>
        </div>
        {/* <p>LW3 DAO is create by 4 amazing members of the LW3 community.</p>
        <p>We decided that the community need a DAO to be able to keep members <br />
        active on different kind of decisions, and be able to track the results.<br /><br />
        The structure of this DAO is that depending on your community role - you have<br />
        access to different proposals.</p> */}
      </section>
    )
  }