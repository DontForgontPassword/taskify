import { useState } from "react";
import styles from "./TodoItem.module.scss";
import type { TodoObject } from "@/types/Todo";

import { FiTrash } from "react-icons/fi";
import { MdEdit, MdSave } from "react-icons/md";
import { useTodoStore } from "@/hooks/useTodoStore";

const TodoItem = ({ task, id }: TodoObject) => {
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const editTodo = useTodoStore((state) => state.editTodo);

    const [isEditing, setIsEditing] = useState(false);

    return (
        <li className={styles.todoItem}>
            <input
                className={styles.taskText}
                value={task}
                onChange={(e) => {
                    if (isEditing) {
                        editTodo(id, e.target.value)
                    }
                }}
                disabled={!isEditing}
            />
            <div className={styles.action}>
                <button
                    className={styles.editButton}
                    aria-label="Edit task"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? <MdSave color="white" /> : <MdEdit color="white" />}
                </button>
                <button
                    className={styles.removeButton}
                    aria-label="Delete task"
                    onClick={() => removeTodo(id)}
                >
                    <FiTrash color="white" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
