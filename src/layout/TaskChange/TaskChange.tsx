import { useState, type FC } from "react";
import { useTodoStore } from "@/hooks/useTodoStore";
import styles from "./TaskChange.module.scss";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import SmallButton from "@/components/SmallButton/SmallButton";

import { IoMdClose } from "react-icons/io";

import type { TodoObject } from "@/types/Todo";


type TaskChangeProps = TodoObject & {
    setEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskChange: FC<TaskChangeProps> = ({
    completed,
    id,
    setEditing
}) => {
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const editTodo = useTodoStore((state) => state.editTodo);

    const handleEditTodo = () => {
        editTodo({
            completed,
            deadline: date,
            id,
            task: content
        });
        setEditing(false);
    }

    return <div className={styles.wrapper}>
        <div className={styles.taskChange}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.title}>Редактирование задачи</h2>
                <SmallButton className={styles.closeButton} ariaLabel="Close edit window" onClick={() => {
                    setEditing(false);
                }}><IoMdClose color="white" /></SmallButton>
            </div>

            <Input className={styles.input} labelText="Какова Ваша задача?" id="edit-task" type="text" onChange={(event) => {
                setContent(event.target.value)
            }} />
            <Input className={styles.input} labelText="Каков Ваш дед-лайн?" id="edit-date" type="date" onChange={(event) => {
                setDate(event.target.value)
            }} />
            <Button className={styles.button} onClick={handleEditTodo}>Сохранить</Button>
        </div>
    </div>;
}

export default TaskChange;