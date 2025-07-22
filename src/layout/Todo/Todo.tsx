import { useState } from "react";

import styles from "./Todo.module.scss"
import { useTodoStore } from "@/hooks/useTodoStore";

const Todo = () => {
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodos = (content: string) => {
        const todo = {
            task: content,
            deadline: date,
            completed: false,
            id: Date.now()
        }

        addTodo(todo);
    }

    return (
        <div className={styles.todo}>
            <h2 className={styles.title}>Добавить задачу</h2>
            <div className={styles.wrapper}>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel} htmlFor="task">
                        Какова Ваша задача?
                    </label>
                    <input id="task" type="text" className={`${styles.input} ${content ? styles.active : ""}`} onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel} htmlFor="date">
                        Каков Ваш дед-лайн?
                    </label>
                    <input id="date" type="date" className={`${styles.input} ${content ? styles.active : ""}`} onChange={(e) => {
                        setDate(e.target.value)
                    }} />
                </div>
                <button className={styles.button} onClick={() => {
                    handleAddTodos(content)
                }}>Добавить задачу</button>
            </div>
        </div>
    );
}

export default Todo;