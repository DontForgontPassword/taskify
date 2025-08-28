import styles from "./Aside.module.scss"
import TodoItem from "@/components/TodoItem/TodoItem";
import { useTodoStore } from "@/hooks/useTodoStore";
import { useState } from "react";
import Select from "react-select";

type Option = {
    value: string,
    label: string
}

const options: Option[] = [
    { value: "active", label: "Активные задачи" },
    { value: "all", label: "Все задачи" },
    { value: "completed", label: "Выполненые задачи" },
    { value: "expired", label: "Просроченные задачи" }
]

const Aside = () => {
    const todos = useTodoStore((state) => state.todos);
    const [selectedOption, setSelectedOption] = useState<Option>(options[1]);

    const filteredTodos = todos.filter(todo => {
        switch (selectedOption.value) {
            case "active":
                return (
                    !todo.completed &&
                    (!todo.deadline || new Date(todo.deadline) >= new Date())
                );
            case "all":
                return true;
            case "completed":
                return todo.completed;
            case "expired":
                return (
                    !todo.completed &&
                    todo.deadline &&
                    new Date(todo.deadline) < new Date()
                );
            default:
                return true;
        }
    });

    return <aside className={styles.aside}>
        <h2 className={styles.title}>Ваши задачи</h2>
        <Select onChange={selected => setSelectedOption(selected as Option)} className={styles.select} options={options} defaultValue={
            options[1]
        } />
        <ul className={styles.todoList}>
            {
                filteredTodos.map(({ task, deadline, completed, id }) => (
                    <TodoItem task={task} deadline={deadline} completed={completed} id={id} key={id} />
                ))
            }
        </ul>
    </aside>;
}

export default Aside;