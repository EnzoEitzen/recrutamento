import { Button } from "@mantine/core";

interface Props {
  onAdd: () => void;
}

export function AddTodoButton({ onAdd }: Props) {
  return <Button onClick={onAdd}>Add task</Button>;
}