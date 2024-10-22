import { z, type ZodType } from "zod";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";

export interface ITodoForm {
  createTodo: (todo: ITodoItem) => void;
}

export type FormData = {
  taskName: string;
};

export type ValidFieldNames = "taskName" | "isDone";

export const CreateTaskSchema: ZodType<FormData> = z.object({
  taskName: z.string().min(1, { message: "Task name can`t be empty" }),
});
