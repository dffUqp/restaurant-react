import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src="images/logo.png" alt="" />
    </Link>
  );
};

export default Logo;
