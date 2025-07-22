import styles from "./Aside.module.scss"
import TodoItem from "@/components/TodoItem/TodoItem";
import { useTodoStore } from "@/hooks/useTodoStore";

const Aside = () => {
    const todos = useTodoStore((state) => state.todos);

    return <aside className={styles.aside}>
        <h2 className={styles.title}>Активные задачи</h2>
        <ul className={styles.todoList}>
            {
                todos.map(({ task, deadline, completed, id }) => (
                    <TodoItem task={task} deadline={deadline} completed={completed} id={id} key={id} />
                ))
            }
        </ul>
    </aside>;
}

export default Aside;