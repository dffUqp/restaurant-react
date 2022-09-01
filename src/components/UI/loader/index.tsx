import React from "react";
import styles from "./loader.module.scss";

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>;
    </div>
  );
};

export default Loader;
