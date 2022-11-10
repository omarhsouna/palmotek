import { Box, Typography } from "@mui/material";
import React from "react";

const SeventhSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        py: "3rem",
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "0.875rem",
      }}
    >
      <Typography sx={{ mb: "0.5rem" }}>
        © Palmotek.com © 2022. All Rights Reserved.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>Privacy</Typography>
        <Typography sx={{ mx: "0.25rem" }}>.</Typography>
        <Typography>Terms</Typography>
        <Typography sx={{ mx: "0.25rem" }}>.</Typography>
        <Typography>FAQ</Typography>
      </Box>
    </Box>
  );
};

export default SeventhSection;
