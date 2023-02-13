import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Allyson Freeman</title>
      </Head>
      <div className={styles.homeWrapper}>
        <div className={styles.header}>
          <h1>Allyson Freeman!</h1>
        </div>
        <div className={styles.bodyWrapper}>
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
