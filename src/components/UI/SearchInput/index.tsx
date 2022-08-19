import React from 'react';
import styles from './SearchInput.module.scss';
import { ISearchInputProps } from './SearchInput.props';

const SearchInput = ({
  tabIndex,
  onFocus,
  onBlur,
  children,
  ...props
}: ISearchInputProps) => {
  return (
    <div
      className={styles['inputBlock']}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img
        className={styles['inputBlock__icon']}
        src="./images/searchmagnifierinterfacesymbol1_79893.png"
        alt="search-icon"
      />
      <input className={styles['inputBlock__input']} {...props} />
      {children}
    </div>
  );
};

export default SearchInput;
