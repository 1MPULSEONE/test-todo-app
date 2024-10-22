"use client";

import { TodoForm } from "~/features/TodoForm/ui";
import { useState } from "react";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";
import { type ITaskFilter } from "~/features/TodoFilter/model/ITaskFilter";
import { useTasks } from "~/features/TodoFilter/lib/useTasks";
import { TaskFilter } from "~/features/TodoFilter/ui";
import { TodoList } from "~/widgets/todoList/ui";

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState<ITodoItem[]>([]);
  const [filter, setFilter] = useState<ITaskFilter>({ sort: "", query: "" });

  const sortedAndSearchedTasks = useTasks(tasks, filter);

  const deleteItem = (task: ITodoItem) => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  const addItem = (newTask: ITodoItem) => {
    setTasks([...tasks, newTask]);
  };

  const updateItem = (updatedTask: ITodoItem) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  return (
    <>
      <TodoForm createTodo={addItem} />
      <div>
        <hr className={"my-5"} />
        <TaskFilter filter={filter} setFilter={setFilter} />
      </div>
      <TodoList
        tasks={sortedAndSearchedTasks}
        remove={deleteItem}
        update={updateItem}
      />
    </>
  );
};
