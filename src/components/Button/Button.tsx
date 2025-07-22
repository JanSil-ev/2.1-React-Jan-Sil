import classnames from "classnames";
import { MouseEventHandler} from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button)}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
