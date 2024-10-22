"use client";

import { Button, Checkbox, Input } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ITodoItem } from "../model/ITask";
import { TaskSchema, type FormData } from "../model/types";
import { ZodError } from "zod";

export interface TodoItemProps {
  task: ITodoItem;
  deleteTask: (task: ITodoItem) => void;
  updateTask: (task: ITodoItem) => void;
  labelNumber: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  updateTask,
  labelNumber,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: task,
    resolver: zodResolver(TaskSchema),
  });

  useEffect(() => {
    if (errors.taskName?.message) {
      console.log(`[ERROR]: Validation error: ${errors.taskName?.message}`);
    }
  }, [errors]);

  const updateTodo = (data: FormData) => {
    const updatedTodo = {
      ...task,
      isDone: data.isDone,
      taskName: data.taskName,
    };
    updateTask(updatedTodo);
    console.log("[SUCCESS]: Task is updated successfully!");
  };

  return (
    <form
      className={"flex w-full flex-row justify-between"}
      onSubmit={handleSubmit(updateTodo)}
    >
      <div className={"flex w-max flex-row items-center gap-x-2"}>
        {labelNumber}

        <Checkbox {...register("isDone")} />
      </div>
      <div className={"flex flex-col gap-y-5"}>
        <Input
          {...register("taskName")}
          placeholder={"task name"}
          className={`${task.isDone ? "line-through" : ""} w-full`}
        />
        {errors.taskName && (
          <span className={"font-500 text-red-500"}>
            {errors.taskName.message}
          </span>
        )}
      </div>

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
