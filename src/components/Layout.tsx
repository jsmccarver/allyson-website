import React from "react";
import Header from "./Header";
import styles from "./Header.module.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.fixed}>{children}</div>
    </>
  );
};
