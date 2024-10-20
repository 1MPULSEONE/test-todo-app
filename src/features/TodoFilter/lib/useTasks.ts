"use client";
import { useMemo } from "react";
import { type ITaskFilter } from "../model/ITaskFilter";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";

export const useSortedTasks = (
  tasks: ITodoItem[],
  sortBy: keyof ITodoItem,
): ITodoItem[] => {
  const sortedTasks = useMemo<ITodoItem[]>(() => {
    const sorted = [...tasks].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      }

      if (typeof valueA === "boolean" && typeof valueB === "boolean") {
        return valueA === valueB ? 0 : valueA ? 1 : -1;
      }

      if (valueA instanceof Date && valueB instanceof Date) {
        return valueA.getTime() - valueB.getTime();
      }

      return 0;
    });

    return sorted;
  }, [sortBy, tasks]);

  return sortedTasks;
};

export const useTasks = (
  tasks: ITodoItem[],
  { sort, query }: ITaskFilter,
): ITodoItem[] => {
  const sortedTasks = useSortedTasks(tasks, sort as unknown as keyof ITodoItem);

  const sortedAndSearchedTasks = useMemo<ITodoItem[]>(() => {
    return sortedTasks.filter((el) =>
      el.taskName.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedTasks]);

  return sortedAndSearchedTasks;
};
