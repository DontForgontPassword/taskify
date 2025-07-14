import type { FC } from "react";
import Container from "@layout/Container/Container";
import styles from "./Main.module.scss"

type Main = {
    children: React.ReactNode,
}

const Main: FC<Main> = ({ children }) => {
    return <main>
        <Container className={styles.inner}>
            {children}
        </Container>
    </main>;
}

export default Main;