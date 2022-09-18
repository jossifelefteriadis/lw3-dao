import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-row justify-around items-center">
      <div>
        <h1 className=" text-6xl font-semibold">Learn Grow & Contribute</h1>
        <h2 className={`${styles.sub_title} text-3xl mt-4 font-semibold`}>
          Proof-Of-Work driven community
        </h2>
      </div>
      <div>
        <Image src="/pair-programming.svg" height={500} width={500} />
      </div>
    </section>
  );
}
