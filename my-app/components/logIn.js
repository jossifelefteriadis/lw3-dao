import styles from "../styles/LogIn.module.css";
import About from "./about"
import DetailsSection from "./detailSection";
import ParticipationInfo from "./participationSection";

export default function LogIn() {
    return (
<section className={styles.main}>
        <About />
        <DetailsSection />
        <ParticipationInfo />
      </section>
    )
  }