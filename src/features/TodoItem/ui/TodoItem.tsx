"use client";

import { Button, Checkbox, Input, InputLabel } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { type ITodoItem } from "../model/ITask";

export interface TodoItemProps {
  task: ITodoItem;
  deleteTask: (task: ITodoItem) => void;
  updateTask: (task: ITodoItem) => void;
  labelNumber: number;
}

interface FormData {
  taskName: string;
  isDone: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  updateTask,
  labelNumber,
}) => {
  const { register, handleSubmit } = useForm<ITodoItem>({
    defaultValues: task,
  });

  const updateTodo = (data: FormData) => {
    const updatedTodo = {
      ...task,
      isDone: data.isDone,
      taskName: data.taskName,
    };
    updateTask(updatedTodo);
  };

  return (
    <form
      className={"flex w-full flex-row justify-between"}
      onSubmit={handleSubmit(updateTodo)}
    >
      <div className={"flex w-max flex-row items-center gap-x-2"}>
        <InputLabel>{labelNumber}</InputLabel>
        <Checkbox {...register("isDone")} />
      </div>

      <Input
        {...register("taskName", { required: true })}
        placeholder={"task name"}
        className={`${task.isDone ? "line-through" : ""} w-full`}
      />

      <div className={"flex flex-row items-center gap-x-3"}>
        <Button onClick={() => deleteTask(task)}>
          <DeleteIcon className={"text-black"} />
        </Button>
        <Button className={"bg-black text-white"} type={"submit"}>
          Save
        </Button>
      </div>
    </form>
  );
};
