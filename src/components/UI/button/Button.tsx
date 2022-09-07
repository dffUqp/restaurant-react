import React from 'react';
import styles from './Button.module.scss';
import { IButton } from './Button.props';
import cn from 'classnames';

const Button: React.FC<IButton> = ({ className, children, ...props }) => {
  return (
    <button className={cn(className, styles.btn)} {...props}>
      {children}
    </button>
  );
};

export default Button;
