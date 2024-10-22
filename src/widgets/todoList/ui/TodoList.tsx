import React from "react";
import { TodoItem } from "~/features/TodoItem/ui";
import { type TodoListProps } from "../model/types";

export const TodoList: React.FC<TodoListProps> = ({
  tasks,
  remove,
  update,
}) => {
  return (
    <div className={"flex min-w-[650px] flex-col items-center justify-center"}>
      {tasks.length === 0 ? (
        <h1>No tasks, yet</h1>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            labelNumber={index + 1}
            updateTask={update}
            deleteTask={() => remove(task)}
          />
        ))
      )}
    </div>
  );
};
