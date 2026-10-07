import { Text } from "@mantine/core";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: { title: string; description: string; done: boolean }[];
  onChange: (index: number, changes: Partial<Props["todos"][number]>) => void;
  onDelete: (index: number) => void;
}

export function TodoList({ todos, onChange, onDelete }: Props) {
  if (!todos.length) return <Text c="dimmed">No tasks yet. Add your first one above.</Text>;

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          onChange={(changes) => onChange(i, changes)}
          onDelete={() => onDelete(i)}
        />
      ))}
    </div>
  );
}