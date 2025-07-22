import type { FC } from "react";
import styles from "./TodoButton.module.scss";

type TodoButtonProps = {
    className: string,
    ariaLabel: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const TodoButton: FC<TodoButtonProps> = ({
    className,
    ariaLabel,
    onClick,
    children
}) => {
    return <button className={`${styles.button} ${className}`} aria-label={ariaLabel} onClick={onClick}>
        {
            children
        }
    </button>;
}

export default TodoButton;