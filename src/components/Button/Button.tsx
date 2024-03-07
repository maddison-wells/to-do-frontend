import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
