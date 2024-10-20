import React from "react";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";
import { TodoItem } from "~/features/TodoItem/ui";

interface TodoListProps {
  tasks: ITodoItem[];
  remove: (id: ITodoItem) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, remove }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No tasks, yet</h1>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            labelNumber={index + 1}
            deleteTask={() => remove(task)}
          />
        ))
      )}
    </div>
  );
};
