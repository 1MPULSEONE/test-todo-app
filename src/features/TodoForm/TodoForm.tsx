"use client";

import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { type ITodoItem } from "../TodoItem/model/ITask";

export interface ITodoForm {
  createTodo: (todo: ITodoItem) => void;
}

export const TodoForm: React.FC<ITodoForm> = ({ createTodo }) => {
  const { register, handleSubmit, reset } = useForm();

  const addNewTodo = (data: { taskName: string }) => {
    const newTodo: ITodoItem = {
      id: Date.now().toString(),
      taskName: data.taskName,
      isDone: false,
      creationDate: new Date(),
    };
    createTodo(newTodo);
    reset();
  };

  return (
    <form
      className={"flex flex-col gap-y-2"}
      onSubmit={handleSubmit((data) => addNewTodo(data))}
    >
      <Input
        type={"text"}
        placeholder={"Enter your task..."}
        {...register("taskName", { required: true })}
      />
      <Button type={"submit"} className={"font-600 bg-black text-white"}>
        Submit
      </Button>
    </form>
  );
};
