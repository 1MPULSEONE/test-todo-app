"use client";

import { TodoForm } from "~/features/TodoForm";
import { useState } from "react";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";
import { type ITaskFilter } from "~/features/TodoFilter/model/ITaskFilter";
import { useTasks } from "~/features/TodoFilter/lib/useTasks";
import { TaskFilter } from "~/features/TodoFilter/ui";
import { TodoList } from "~/widgets/todoList/ui";

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState<ITodoItem[]>([]);
  const [filter, setFilter] = useState<ITaskFilter>({ sort: "", query: "" });

  const sortedAndSearchedTaks = useTasks(tasks, filter);

  const deleteItem = (task: ITodoItem) => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  const addItem = (newTask: ITodoItem) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TodoForm createTodo={addItem} />
      <div>
        <hr className={"my-5"} />
        <TaskFilter filter={filter} setFilter={setFilter} />
      </div>
      <TodoList tasks={sortedAndSearchedTaks} remove={deleteItem} />
    </>
  );
};
