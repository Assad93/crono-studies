import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ type = "button", onClick, children }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
