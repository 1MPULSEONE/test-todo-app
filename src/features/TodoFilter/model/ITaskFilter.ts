export interface ITaskFilter {
  sort: string;
  query: string;
}

export interface TaskFilterProps {
  filter: ITaskFilter;
  setFilter: (filter: ITaskFilter) => void;
}
