import { useEffect, useRef } from "react"
import styles from "./Header.module.scss"

import Container from "@layout/Container/Container"

const words = [
    "Успей все",
    "Разделяй задачи на мелкие шаги",
    "Ставь приоритеты",
    "Добавляй дедлайны и напоминания",
    "Ежедневный пересмотр"
]

const Header = () => {

    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        let offset = 0;

        const step = () => {
            offset += 1;

            if (offset >= list.scrollWidth / 2) {
                offset = 0;
            }

            list.style.transform = `translateX(-${offset}px)`; // положительное значение offset двигает список вправо, содержимое — влево

            requestAnimationFrame(step);
        };

        step();
    }, []);



    return <header className={styles.header}>
        <Container className={styles.inner}>
            <div>
                <h1 className={styles.title}>Taskify</h1>
            </div>
            <div className={styles.carousel}>
                <ul ref={listRef} className={styles.list}>
                    {
                        words.map((word) => (<li className={styles.listItem} key={word}>{word}</li>))
                    }
                    {
                        words.map((word) => (<li className={styles.listItem} key={`clone-${word}`}>{word}</li>))
                    }
                </ul>
            </div>
        </Container>
    </header>
}

export default Header;