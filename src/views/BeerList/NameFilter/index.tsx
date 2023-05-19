import { useState, useEffect, ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function NameFilter({ onFilter = (params: any) => {} }) {
  const [name, setName] = useState("");

  // trigger parent callback after name assigment
  useEffect(() => {
    onFilter({ by_name: name });
  }, [name]);

  const handleFind = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setName(event.target.value);
    }
  };

  let typing: any = null;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!typing) {
      typing = setTimeout(() => {
        setName(event.target.value);
        clearInterval(typing);
        typing = null;
      }, 1000);
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