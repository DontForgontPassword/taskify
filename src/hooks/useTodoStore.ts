import { create } from "zustand";
import { persist } from "zustand/middleware"
import { type TodoObject } from "@/types/Todo";

interface TodoState {
    todos: TodoObject[],
    addTodo: (todo: TodoObject) => void,
    removeTodo: (id: number) => void,
    editTodo: (newTodo: TodoObject) => void,
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodo: (todo: TodoObject) => {
                set({ todos: [...get().todos, todo] });
            },
            removeTodo: (id: number) => {
                set({ todos: get().todos.filter((todo) => todo.id !== id) });
            },
            editTodo: (newTodo: TodoObject) => {
                set({
                    todos: get().todos.map((todo) =>
                        todo.id === newTodo.id ? newTodo : todo
                    ),
                });
            },
        }),
        {
            name: "todo-storage",
        }
    )
)