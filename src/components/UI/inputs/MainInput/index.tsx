import React from 'react';
import styles from './MainInput.module.scss';
import { IMainInputProps } from './MainInput';

const MainInput = ({
  tabIndex,
  onFocus,
  onBlur,
  children,
  ...props
}: IMainInputProps): JSX.Element => {
  return (
    <div
      className={styles.MainInput}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img
        className={styles.MainInput__icon}
        src="./images/searchmagnifierinterfacesymbol1_79893.png"
        alt="search-icon"
      />
      <input className={styles.MainInput__input} {...props} />
      {children}
    </div>
  );
};

export default MainInput;
