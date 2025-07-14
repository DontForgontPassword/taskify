import TodoItem from "@/components/TodoItem/TodoItem";
import styles from "./Aside.module.scss"

const task = [
    {
        task: "Убраться в комнате",
    },
    {
        task: "Пойти погулять с друзьями",
    },
    {
        task: "Покакать",
    }
]

const Aside = () => {
    return <aside className={styles.aside}>
        <h2 className={styles.title}>Активные задачи</h2>
        <ul className={styles.todoList}>
            {
                task.map(({ task }, index) => (
                    <TodoItem task={task} key={index}></TodoItem>
                ))
            }
        </ul>
    </aside>;
}

export default Aside;