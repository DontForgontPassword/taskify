import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type TodoObject } from "@/types/Todo";

interface TodoInterface {
  todos: TodoObject[];
  addTodo: (todo: TodoObject) => void;
  removeTodo: (id: number) => void;
  editTodo: (newTodo: TodoObject) => void;
}

export const useTodoStore = create<TodoInterface>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: TodoObject) => {
        set((state) => ({
          todos: [...state.todos, todo]
        }));
      },
      removeTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      editTodo: (newTodo: TodoObject) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo
          ),
        }));
      },
    }),
    {
      name: "todo-storage",
    }
  )
);
