import { useState } from "react";

import styles from "./Todo.module.scss"
import { useTodoStore } from "@/hooks/useTodoStore";

const Todo = () => {
    const [content, setContent] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodos = (content: string) => {
        addTodo(content);
    }

    return (
        <div className={styles.todo}>
            <h2 className={styles.title}>Добавить задачу</h2>
            <div className={styles.wrapper}>
                <div className={styles.inputWrapper}>
                    <input id="task" type="text" className={`${styles.input} ${content ? styles.active : ""}`} onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                    <label className={styles.inputLabel} htmlFor="task">
                        Какова Ваша задача?
                    </label>
                </div>
                <button className={styles.button} onClick={() => {
                    handleAddTodos(content)
                }}>Добавить задачу</button>
            </div>
        </div>
    );
}

export default Todo;