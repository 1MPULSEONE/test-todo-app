import { type FieldError, type UseFormRegister } from "react-hook-form";
import { z, type ZodType } from "zod";

export type FormData = {
  taskName: string;
  isDone: boolean;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "taskName" | "isDone";

export const TaskSchema: ZodType<FormData> = z.object({
  taskName: z.string().min(1, { message: "Task name can`t be empty" }),
  isDone: z.boolean(),
});
