import type { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
    return (<button className={`${styles.button} ${className ?? ""}`} onClick={onClick}>{children}</button>);
}

export default Button;