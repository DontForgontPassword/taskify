import styles from "./TodoItem.module.scss"

type Props = {
    task: string,
}

const TodoItem = (Props: Props) => {
    return (
        <li className={styles.todoItem}>
            <p className={styles.todoTask}>{Props.task}</p>
        </li>
    );
}

export default TodoItem;