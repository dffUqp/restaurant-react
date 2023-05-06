import React from 'react';
import styles from './Toggle.module.scss';

type ToggleProps = {
  value: boolean | undefined;
  onChange: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export const Toggle = ({ value, onChange }: ToggleProps) => {
  return (
    <div className={styles.switch}>
      <label htmlFor="toggler">
        <input
          type="checkbox"
          id="toggler"
          onClick={onChange}
          checked={value}
          readOnly
        />
        <span className={styles.switch__slider}></span>
      </label>
    </div>
  );
};
