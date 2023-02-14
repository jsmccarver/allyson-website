import Head from "next/head";
import { useState } from "react";
import classNames from "classnames";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Allyson Freeman</title>
      </Head>
      <div className={styles.homeWrapper}>
        <div className={styles.header}>
          <h1>Allyson Freeman!</h1>
        </div>

        {menuOpen ? null : (
          <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <div
          className={classNames(styles.menu, { [styles.menuOpen]: menuOpen })}
        >
          <div className={styles.menuHeader}>
            <h2>menu!</h2>
            <img
              src={"/close-button.svg"}
              className={styles.cancelButton}
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
          <div>my cats!</div>
          <div>ttrpg stuff!</div>
          <div>dice!</div>
          <div>miniature!</div>
          <div>maps!</div>
          <div>contact me!</div>
        </div>

        <div
          className={classNames(styles.bodyWrapper, {
            [styles.bodyWrapperMenu]: menuOpen,
          })}
        >
          <h2 className={styles.hello}>hello!</h2>
          <img className={styles.allysonFace} src={"/allyson-face.png"}></img>
          <h2>welcome to my website :3</h2>
          <h3 className={styles.description}>
            i like cats, ttrpg&apos;s, dice, painting miniatures, video games
            and maps!
          </h3>
          <p>icon picrew by: 16xmin</p>
        </div>
      </div>
    </>
  );
}
