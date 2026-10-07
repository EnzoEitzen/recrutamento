import { Title } from "@mantine/core";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoList } from "@/components/todo/TodoList";
import { useTodo } from "@/lib/frontend/hooks/useTodo"; // <- point this at your existing hook

export default function TodoPage() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-12">
      <Title order={2}>Todo list</Title>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onChange={updateTodo} onDelete={deleteTodo} />
    </main>
  );
}