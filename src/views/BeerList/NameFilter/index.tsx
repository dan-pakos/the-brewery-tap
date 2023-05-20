import { useState, useEffect, ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { ApiParams } from "../../../types";

export default function NameFilter({ onFilter = (params: ApiParams) => {} }) {
  const [name, setName] = useState("");

  // trigger parent callback after name assigment
  useEffect(() => {
    onFilter({ by_name: name });
  }, [name]);

  const handleFind = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setName(encodeURIComponent(event.target.value));
    }
  };

  let typing: any = null;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!typing) {
      typing = setTimeout(() => {
        setName(event.target.value);
        typing = null;
      }, 1000);
    } else {
      clearTimeout(typing);
      typing = null;
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <TextField
        label="Filter by name"
        variant="outlined"
        onKeyDown={handleFind}
        onChange={handleChange}
      />
    </FormControl>
  );
}
