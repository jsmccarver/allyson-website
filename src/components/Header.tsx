import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

      <div className={classNames(styles.menu, { [styles.menuOpen]: menuOpen })}>
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

        <Link href="/cat">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Cats!
          </div>
        </Link>
        <Link href="/ttrpg">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            TTRPG stuff!
          </div>
        </Link>
        <Link href="/dice">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Dice!
          </div>
        </Link>
        <Link href="/miniature">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Miniature
          </div>
        </Link>
        <Link href="/maps">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Maps!
          </div>
        </Link>
        <Link href="/contact">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Contact me!
          </div>
        </Link>
      </div>
    </>
  );
}
