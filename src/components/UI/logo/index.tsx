import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import { themes } from '../../../ts/enums/themeEnum';
import styles from './Logo.module.scss';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" className={styles.logo}>
      <img src={theme === themes.light ? 'images/logo.png' : 'images/DarkModelogo.png'} alt="logo" />
    </Link>
  );
};

export default Logo;
