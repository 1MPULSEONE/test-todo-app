"use client";
import { useMemo } from "react";
import { type ITaskFilter } from "../model/ITaskFilter";
import { type ITodoItem } from "~/features/TodoItem/model/ITask";

export const useSortedTasks = (
  tasks: ITodoItem[],
  sortBy: keyof ITodoItem,
): ITodoItem[] => {
  const sortedTasks = useMemo(() => {
    const sortedByKey = [...tasks].sort((a, b) => {
      let valueA;
      let valueB;

      if (sortBy == "taskName") {
        valueA = a.taskName;
        valueB = b.taskName;
        return valueA.localeCompare(valueB);
      }

      if (sortBy == "creationDate") {
        valueA = a.creationDate;
        valueB = b.creationDate;
        return valueA.getTime() - valueB.getTime();
      }
      return 0;
    });

    const sortedByDone = [...sortedByKey].sort((a, b) => {
      const valueA = a.isDone;
      const valueB = b.isDone;
      return valueA === valueB ? 0 : valueA ? 1 : -1;
    });

    return sortedByDone;
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
