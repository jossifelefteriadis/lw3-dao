import styles from "../styles/Nav.module.css";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";


export default function Nav() {
  const address = useAddress();

    return (
      <section className={styles.navContainer}>
        <Link href="/">
        <h1 className={styles.title}>LW3 DAO</h1>
      </Link>
      {address ? (
        <ul className={styles.navItems}>
          <Link href="/createproposal">
            <li>CREATE PROPOSAL</li>
          </Link>
          <Link href="/previousproposals">
            <li>PREVIOUS PROPOSALS</li>
          </Link>
          <li>
        <ConnectWallet accentColor="#162C68" colorMode="dark" />
          </li>
        </ul>
      ) : (
        <ConnectWallet accentColor="#162C68" colorMode="dark" />
      )}
      </section>
    )
  }