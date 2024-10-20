"use client";

import { Button, Checkbox, Input, InputLabel } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import { type ITodoItem } from "../model/ITask";

export interface TodoItemProps {
  task: ITodoItem;
  deleteTask: (task: ITodoItem) => void;
  labelNumber: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  labelNumber,
}) => {
  const { register, handleSubmit } = useForm<ITodoItem>({
    defaultValues: {
      isDone: false,
      taskName: "",
    },
  });

  return (
    <form className={"flex w-max flex-row justify-between"}>
      <Checkbox {...register("isDone")} />
      <div>
        <InputLabel>{labelNumber}</InputLabel>
        <Input
          {...register("taskName", { required: true })}
          placeholder={"task name"}
          className={"w-max"}
          value={task.taskName}
        />
      </div>

      <div className={"flex flex-row items-center gap-x-3"}>
        <Button onClick={() => deleteTask(task)}>
          <DeleteIcon />
        </Button>
        <EditIcon />
      </div>
    </form>
  );
};
