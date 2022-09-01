import React from "react";
import styles from "./Button.module.scss";
import { IButton } from "./Button.props";

const Button: React.FC<IButton> = ({ className, children, ...props }) => {
  return (
    <button className={[className, styles.btn].join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
