import { MouseEvent } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Paginator({ onNext = () => {} }) {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100px"
    >
      <Button variant="outlined" onClick={handleClick}>
        Next &#8811;
      </Button>
    </Box>
  );
}
