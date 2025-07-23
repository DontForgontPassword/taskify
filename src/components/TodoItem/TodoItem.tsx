import { useState, type FC } from "react";
import type { TodoObject } from "@/types/Todo";
import styles from "./TodoItem.module.scss";

import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useTodoStore } from "@/hooks/useTodoStore";
import { FaCheck } from "react-icons/fa6";
import TaskChange from "@/layout/TaskChange/TaskChange";
import SmallButton from "../SmallButton/SmallButton";


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
        <span className={`${styles.taskText} ${isCompleted ? styles.completed : ""}`}>{task}</span>
        <div className={styles.action}>
          <SmallButton className={styles.editButton} ariaLabel="Edit task" onClick={handleEdit}>
            {
              <MdEdit color="white" />
            }
          </SmallButton>
          <SmallButton className={styles.removeButton} ariaLabel="Delete task" onClick={handleRemove}>
            <FiTrash color="white" />
          </SmallButton>
          <SmallButton className={`${styles.toggleButton} ${isCompleted ? styles.completed : ""}`} ariaLabel="Toggle task" onClick={handleToggle}>
            {
              isCompleted ? <FaCheck color="white" /> : null
            }
          </SmallButton>
        </div>
      </div>
      {
        isEditing ? <TaskChange setEditing={setEditing} task={task} deadline={deadline} completed={completed} id={id} /> : null
      }
    </li>
  );
};

export default TodoItem;
