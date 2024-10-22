"use client";

import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { type ITodoItem } from "../../TodoItem/model/ITask";
import {
  CreateTaskSchema,
  type ITodoForm,
  type FormData,
} from "../model/types";
import { zodResolver } from "@hookform/resolvers/zod";

export const TodoForm: React.FC<ITodoForm> = ({ createTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(CreateTaskSchema),
  });

  useEffect(() => {
    if (errors.taskName?.message) {
      console.log(`[ERROR]: Validation error: ${errors.taskName?.message}`);
    }
  }, [errors]);

  const addNewTodo = (data: FormData) => {
    const newTodo: ITodoItem = {
      id: Date.now().toString(),
      taskName: data.taskName,
      isDone: false,
      creationDate: new Date(),
    };
    createTodo(newTodo);
    console.log("[SUCCESS]: Task is created successfully!");
    reset();
  };

  return (
    <form
      className={"flex flex-col gap-y-2"}
      onSubmit={handleSubmit(addNewTodo)}
    >
      <div className={"flex flex-col gap-y-5"}>
        <Input
          type={"text"}
          placeholder={"Enter your task..."}
          {...register("taskName", { required: true })}
        />
        {errors.taskName && (
          <span className={"font-500 text-red-500"}>
            {errors.taskName.message}
          </span>
        )}
      </div>

      <Button type={"submit"} className={"font-600 bg-black text-white"}>
        Submit
      </Button>
    </form>
  );
};
