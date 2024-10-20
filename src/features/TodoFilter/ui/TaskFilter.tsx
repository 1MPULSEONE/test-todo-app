import { Input, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { type TaskFilterProps } from "../model/ITaskFilter";

export const TaskFilter: React.FC<TaskFilterProps> = ({
  filter,
  setFilter,
}) => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setFilter({ ...filter, sort: event.target.value });
  };

  return (
    <div>
      <Input
        placeholder={"Поиск..."}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        defaultValue={"Сортировка по:"}
        value={filter.sort}
        onChange={handleSortChange}
      >
        <MenuItem value={"title"}>By name</MenuItem>
        <MenuItem value={"date"}>By date</MenuItem>
      </Select>
    </div>
  );
};
