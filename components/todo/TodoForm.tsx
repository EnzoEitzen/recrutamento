import { useState } from "react";
import { Button, Paper, Textarea, TextInput } from "@mantine/core";

interface Props {
  onAdd: (title: string, description: string) => void;
}

export function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title.trim()) return;
    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };

  return (
    <Paper withBorder p="md" className="flex flex-col gap-3">
      <TextInput
        label="Title"
        placeholder="What needs doing?"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Textarea
        label="Description"
        placeholder="Add details (optional)"
        autosize
        minRows={2}
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <Button onClick={submit} disabled={!title.trim()} className="self-end" classNames={{ root: "mt-2" }
      }>
        Add task
      </Button>
    </Paper>
  );
}