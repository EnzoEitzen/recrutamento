import { useState } from "react";

export function useTodo(
  initialItems?: { title: string; description: string; done: boolean }[]
) {
  const [todos, setTodos] = useState<
    { title: string; description: string; done: boolean }[]
  >(initialItems || []);

  /* Add your todo methods here */
  const addTodo = (title: string, description: string) => {
    setTodos((prevTodos) => [...prevTodos, { title, description, done: false }]);
  };

  const updateTodo = (
    index: number,
    changes: Partial<{ title: string; description: string; done: boolean }>
  ) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, ...changes } : todo))
    );
  };

  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}