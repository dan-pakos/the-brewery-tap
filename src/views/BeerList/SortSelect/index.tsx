import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { ApiParams, sortOption } from "../../../types";

export default function SortSelect({ onChange = (params: ApiParams) => {} }) {
  const sortByOptions: Array<sortOption> = [
    { label: `Name ASC`, key: "name", order: "asc" },
    { label: `Name DESC`, key: "name", order: "desc" },
    { label: `Brewery Type ASC`, key: "type", order: "asc" },
    {
      label: `Brewery Type DESC`,
      key: "type",
      order: "desc",
    },
  ];

  const initSortBy = sortByOptions[0]; // default by Name ASC

  const [sortType, setSortType] = useState(initSortBy);

  const handleChange = (event: SelectChangeEvent) => {
    const selected = sortByOptions.filter(
      (el) => el.label === event.target.value
    );

    // update state after select change
    setSortType(selected[0]);
  };

  // trigger parent callback after sortType assigment
  useEffect(() => {
    onChange({ sort: sortType.key + ":" + sortType.order });
  }, [sortType]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="sort-by-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-by-select-label"
        id="sort-by-select"
        value={sortType.label}
        label="Sort by"
        onChange={handleChange}
      >
        {sortByOptions.map((sortOption) => (
          <MenuItem key={sortOption.label} value={sortOption.label}>
            {sortOption.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
