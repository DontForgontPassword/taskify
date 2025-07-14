import styles from "./Container.module.scss"
import clsx from "clsx"

type Props = {
    children: React.ReactNode,
    className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
    return <div className={clsx(styles.container, className)}>{children}</div>
}

export default Container;