import { type ITodoItem } from "~/features/TodoItem/model/ITask";

export interface TodoListProps {
  tasks: ITodoItem[];
  remove: (id: ITodoItem) => void;
  update: (id: ITodoItem) => void;
}
