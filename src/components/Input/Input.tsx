import type { FC } from "react";
import styles from "./Input.module.scss";

type InputProps = {
    labelText: string,
    className?: string,
    id?: string,
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
    labelText,
    className,
    id,
    type,
    onChange
}) => {
    return <div className={`${styles.inputWrapper}`}>
        <label className={styles.inputLabel} htmlFor={id}>
            {labelText}
        </label>
        <input id={id} type={type} className={`${styles.input} ${className ?? ""}`} onChange={onChange} />
    </div>;
}

export default Input;