import React from "react";
import styles from "./Button.module.scss";
import { IButton } from "./Button.props";

const Button: React.FC<IButton> = ({ color = "blue", children, ...props }) => {
  return (
    <button className={[styles[color], styles.btn].join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
