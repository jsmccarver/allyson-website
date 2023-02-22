import Head from "next/head";
import classNames from "classnames";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const menuOpen = false;
  return (
    <>
      <Head>
        <title>Allyson Freeman</title>
      </Head>

      <div
        className={classNames(styles.bodyWrapper, {
          [styles.bodyWrapperMenu]: menuOpen,
        })}
      >
        <h2 className={styles.hello}>hello!</h2>
        <img className={styles.allysonFace} src={"/allyson-face.png"}></img>
        <h2>welcome to my website :3</h2>
        <h3 className={styles.description}>
          i like cats, ttrpg&apos;s, dice, painting miniatures, video games and
          maps!
        </h3>
        <p>icon picrew by: 16xmin</p>
      </div>
    </>
  );
}
