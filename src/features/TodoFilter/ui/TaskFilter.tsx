import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { type TaskFilterProps } from "../model/ITaskFilter";

export const TaskFilter: React.FC<TaskFilterProps> = ({
  filter,
  setFilter,
}) => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setFilter({ ...filter, sort: event.target.value });
  };

  return (
    <div className={"flex flex-row items-center gap-x-2"}>
      <Input
        placeholder={"Search"}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <InputLabel id="select-sort-type-label" className={"text-black"}>
        Sort by:
      </InputLabel>
      <Select
        id={"select-sort-type"}
        labelId={"select-sort-type-label"}
        defaultValue={"Sort by:"}
        value={filter.sort}
        onChange={handleSortChange}
        className={"tex-black min-w-[120px]"}
      >
        <MenuItem value={"taskName"} defaultChecked>
          By name
        </MenuItem>
        <MenuItem value={"creationDate"}>By date</MenuItem>
      </Select>
    </div>
  );
};
