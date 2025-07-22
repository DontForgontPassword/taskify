import { useState } from "react";
import styles from "./TodoItem.module.scss";
import type { TodoObject } from "@/types/Todo";

import { FiTrash } from "react-icons/fi";
import { MdEdit, MdSave } from "react-icons/md";
import { useTodoStore } from "@/hooks/useTodoStore";
import { FaCheck } from "react-icons/fa6";

const TodoItem = ({ task, deadline, completed, id }: TodoObject) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setCompleted] = useState(completed);

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleToggle = () => {
    if (!isEditing) {
      setCompleted((prev) => {
        const updated = !prev;
        editTodo({ task, deadline, completed: updated, id });
        return updated;
      });
    }
  };

  const handleEditing = () => setIsEditing(!isEditing);

  const handleRemove = () => removeTodo(id);

  return (
    <li className={styles.todoItem}>
      <span className={styles.deadLineText}>{deadline}</span>
      <div className={styles.wrapper}>
        <input
          className={`${styles.taskText} ${isCompleted ? styles.completedInput : ""
            }`}
          value={task}
          onChange={(e) => {
            if (isEditing) {
              const editedTodo = {
                task: e.target.value,
                deadline: deadline,
                completed: isCompleted,
                id: id,
              };
              editTodo(editedTodo);
            }
          }}
          disabled={!isEditing}
        />
        <div className={styles.action}>
          <button
            className={styles.editButton}
            aria-label="Edit task"
            onClick={handleEditing}
            disabled={isCompleted}
          >
            {isEditing ? <MdSave color="white" /> : <MdEdit color="white" />}
          </button>
          <button
            className={styles.removeButton}
            aria-label="Delete task"
            onClick={handleRemove}
          >
            <FiTrash color="white" />
          </button>
          <button
            className={`${styles.toggleButton} ${isCompleted ? styles.completed : ""
              }`}
            onClick={handleToggle}
          >
            {completed ? <FaCheck color="white" /> : null}
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
