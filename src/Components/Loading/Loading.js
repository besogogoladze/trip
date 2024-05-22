import * as React from "react";
import Box from "@mui/material/Box";
import { GridLoader } from "react-spinners";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <GridLoader color="#d33" />
    </Box>
  );
}
