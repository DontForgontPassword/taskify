import styles from "./TodoItem.module.scss"

import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

type Props = {
    task: string,
}

const TodoItem = (Props: Props) => {
    return (
        <li className={styles.todoItem}>
            <p className={styles.taskText}>{Props.task}</p>
            <div className={styles.action}>
                <button className={styles.editButton}><MdEdit color="white" /></button>
                <button className={styles.removeButton}><FiTrash color="white" /></button>
            </div>
        </li >
    );
}

export default TodoItem;