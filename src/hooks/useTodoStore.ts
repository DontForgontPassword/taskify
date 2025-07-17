import { create } from "zustand";
import { persist } from "zustand/middleware"
import { type TodoObject } from "@/types/Todo";

interface TodoState {
    todos: TodoObject[],
    addTodo: (task: string) => void,
    removeTodo: (id: number) => void,
    editTodo: (id: number, newTask: string) => void,
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodo: (task: string) => {
                const newTodo = {
                    task,
                    id: Date.now(),
                };
                set({ todos: [...get().todos, newTodo] });
            },
            removeTodo: (id: number) => {
                set({ todos: get().todos.filter((todo) => todo.id !== id) });
            },
            editTodo: (id: number, newTask: string) => {
                set({
                    todos: get().todos.map((todo) =>
                        todo.id === id ? { ...todo, task: newTask } : todo
                    ),
                });
            },
        }),
        {
            name: "todo-storage",
        }
    )
)