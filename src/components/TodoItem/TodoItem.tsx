import { useEffect, useState, type FC } from "react";
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
  const [isLate, setLate] = useState(false);
  const [deadLineStatus, setDeadLineStatus] = useState<React.ReactNode>();

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleToggle = () => {
    if (!isLate) {
      setCompleted(!isCompleted);
      editTodo({ task, deadline, completed: !isCompleted, id });
    }
  };

  const handleRemove = () => removeTodo(id);

  const handleEdit = () => setEditing(!isEditing);

  useEffect(() => {
    let dateNow = new Date();
    let deadLineDate = new Date(deadline);

    if (deadline.trim() === "") return;

    if (dateNow.getTime() > deadLineDate.getTime()) {
      setDeadLineStatus("😿 Просрочено");
      setLate(true);
    } else {
      setDeadLineStatus("🕐 Еще есть время");
      setLate(false);
    }
  }, [deadline]);

  return (
    <li className={`${styles.todoItem} ${!isCompleted && isLate ? styles.late : ""} ${isCompleted ? styles.completed : ""}`}>
      {
        deadline ? <div className={styles.deadlineWrapper}>
          <span className={`${styles.taskStatusText}`}>{deadLineStatus}</span>
          <span className={styles.deadLineText}>до {deadline}</span>
        </div> : null
      }
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
        !isCompleted && !isLate && isEditing ? <TaskChange setEditing={setEditing} task={task} deadline={deadline} completed={completed} id={id} /> : null
      }
    </li>
  );
};

export default TodoItem;
