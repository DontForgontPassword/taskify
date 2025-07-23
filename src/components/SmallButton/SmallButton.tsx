import type { FC } from "react";
import styles from "./SmallButton.module.scss";

type SmallButtonProps = {
    className: string,
    ariaLabel: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const SmallButton: FC<SmallButtonProps> = ({
    className,
    ariaLabel,
    onClick,
    children
}) => {
    return <button className={`${styles.button} ${className ?? ""}`} aria-label={ariaLabel} onClick={onClick}>
        {
            children
        }
    </button>;
}

export default SmallButton;