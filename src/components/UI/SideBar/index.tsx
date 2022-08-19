import React from 'react';
import styles from './SideBar.module.scss';
import { ISideBarProps } from './SideBar.props';

const SideBar = ({ toggleNav, children }: ISideBarProps) => {
  return (
    <div className={styles.sidebar}>
      <div onClick={toggleNav} className={styles.sidebar__backdrop} />
      <div className={styles.sidebar__panel}>{children}</div>
    </div>
  );
};

export default SideBar;
