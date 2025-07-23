import { useState } from "react";

import styles from "./Todo.module.scss"
import { useTodoStore } from "@/hooks/useTodoStore";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

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
                <Input type="text" labelText="Какова Ваша задача?" id="task" onChange={(event) => {
                    setContent(event.target.value)
                }} className={styles.input} />
                <Input type="date" labelText="Какова Ваша задача?" id="date" onChange={(event) => {
                    setDate(event.target.value)
                }} className={styles.input} />
                <Button className={styles.button} onClick={() => {
                    handleAddTodos(content)
                }}>Добавить задачу</Button>
            </div>
        </div>
    );
}

export default Todo;