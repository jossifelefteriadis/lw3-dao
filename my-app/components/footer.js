import React from "react";
// import styles from "../../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" bg-black flex items-center justify-center py-3 opacity-60">
        {/* <div className={styles.team_members}>
          <span>Dhruv Agarwal</span>
          <span>Kushagra Sarathe</span>
          <span>Nils Giebing</span>
          <span>Aditya Gupta</span>
        </div> */}
        <div className="flex items-center">
          {/* <Image src={logo} /> */}

          <span className="mr-4">
            © 2022 ALL RIGHTS RESERVED - LearnWeb3 DAO
          </span>
          <div className=" bg-white w-5 h-5">
            <a
              href="https://github.com/jossifelefteriadis/lw3-dao"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/GitHub-Mark-32px.png" width={20} height={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}