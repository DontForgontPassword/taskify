import { useState, type FC } from "react";
import type { TodoObject } from "@/types/Todo";
import styles from "./TodoItem.module.scss";

import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useTodoStore } from "@/hooks/useTodoStore";
import { FaCheck } from "react-icons/fa6";
import TaskChange from "@/layout/TaskChange/TaskChange";
import TodoButton from "../TodoButton/TodoButton";

const TodoItem: FC<TodoObject> = ({ task, deadline, completed, id }) => {
  const [isCompleted, setCompleted] = useState(completed);
  const [isEditing, setEditing] = useState(false);

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleToggle = () => {
    setCompleted(!isCompleted);
    editTodo({ task, deadline, completed: !isCompleted, id });
  };

  const handleRemove = () => removeTodo(id);

  const handleEdit = () => setEditing(!isEditing);

  return (
    <li className={styles.todoItem}>
      <span className={styles.deadLineText}>{deadline}</span>
      <div className={styles.wrapper}>
        <span className={`${styles.taskText} ${isCompleted ? styles.completedInput : ""}`}>{task}</span>
        <div className={styles.action}>
          <TodoButton className={styles.editButton} ariaLabel="Edit task" onClick={handleEdit}>
            {
              <MdEdit color="white" />
            }
          </TodoButton>
          <TodoButton className={styles.removeButton} ariaLabel="Delete task" onClick={handleRemove}>
            <FiTrash color="white" />
          </TodoButton>
          <TodoButton className={`${styles.toggleButton} ${isCompleted ? styles.completed : ""}`} ariaLabel="Toggle task" onClick={handleToggle}>
            {
              isCompleted ? <FaCheck color="white" /> : null
            }
          </TodoButton>
        </div>
      </div>
      {
        isEditing ? <TaskChange /> : null
      }
    </li>
  );
};

export default TodoItem;
