import { Button, Checkbox, Paper, Textarea, TextInput } from "@mantine/core";

interface Props {
  todo: { title: string; description: string; done: boolean };
  onChange: (changes: Partial<Props["todo"]>) => void;
  onDelete: () => void;
}

export function TodoItem({ todo, onChange, onDelete }: Props) {
  const strike = todo.done ? "line-through opacity-60" : "";

  return (
    <Paper withBorder p="sm" className="flex items-start gap-3">
      <Checkbox
        className="pt-2"
        checked={todo.done}
        onChange={(e) => onChange({ done: e.currentTarget.checked })}
      />
      <div className="flex-1">
        <TextInput
          variant="unstyled"
          value={todo.title}
          onChange={(e) => onChange({ title: e.currentTarget.value })}
          classNames={{ input: `font-semibold ${strike}` }}
        />
        <Textarea
          variant="unstyled"
          autosize
          minRows={1}
          placeholder="No description"
          value={todo.description}
          onChange={(e) => onChange({ description: e.currentTarget.value })}
          classNames={{ input: `text-sm ${strike}` }}
        />
      </div>
      <Button variant="subtle" color="red" size="xs" onClick={onDelete}>
        Delete
      </Button>
    </Paper>
  );
}