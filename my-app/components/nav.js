import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Footer from "./footer";



export default function Nav({ children }) {
  return (
    <>
      <header>
        <nav className={styles.navContainer}>
          <Link href="/">
            <div className="flex items-center pt-4 cursor-pointer">
              <Image src="/lw3-logo-white.png" height={50} width={250}></Image>
              <h1 className=" text-3xl pb-2 pt-1 font-semibold first-letter:text-pink-500">
                DAO
              </h1>
            </div>
          </Link>
          <ul className="flex flex-row justify-between items-center pt-4">
            <Link href="/">
              <li
                className={`${styles.link} ${styles.link_page} cursor-pointer text-lg mr-4`}
              >
                Home
              </li>
            </Link>
            <Link href="https://learnweb3.io/">
              <li
                className={`${styles.link} ${styles.link_page} cursor-pointer text-lg mr-4`}
              >
                Main Site
              </li>
            </Link>
            <Link href="/proposals">
              <li
                className={`${styles.link} ${styles.link_page} cursor-pointer text-lg mr-6`}
              >
                PROPOSALs
              </li>
            </Link>
            <Link href="/team">
              <li
                className={`${styles.link} ${styles.link_page} cursor-pointer text-lg mr-6`}
              >
                Team
              </li>
            </Link>
            <li>
              <ConnectButton label="Sign in" />
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
}
