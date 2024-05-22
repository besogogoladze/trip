import { Box } from "@mui/material";
import React from "react";
import airplane from "../../Images/Airplane loader.gif";

function AirplaneLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F4F4",
      }}
    >
      <img width={"50%"} src={airplane} alt="Loading..." />
    </Box>
  );
}

export default AirplaneLoading;
