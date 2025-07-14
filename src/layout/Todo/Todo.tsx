import { useEffect, useState } from "react";
import styles from "./Todo.module.scss"
import { words } from "./words";

const Todo = () => {
    const [word, setWord] = useState(words[0]);

    let previousIndex = 0;

    useEffect(() => {
        let nextIndex
        const interval = setInterval(() => {
            do {
                nextIndex = Math.floor(Math.random() * words.length);
            } while (previousIndex === nextIndex);

            previousIndex = nextIndex;

            setWord(words[nextIndex]);
        }, 7000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className={styles.todo}>
            <h2 className={styles.title}>Список задач</h2>
            <div className={styles.wrapper}>
                <div className={styles.inputWrapper}>
                    <input id="task" type="text" className={styles.input} />
                    <label className={styles.inputLabel} htmlFor="task">{
                        word
                    }</label>
                </div>
                <button className={styles.button}>Добавить задачу</button>
            </div>
        </div>
    );
}

export default Todo;