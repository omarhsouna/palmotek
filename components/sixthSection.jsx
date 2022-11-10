import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SixthSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(45deg, #006838, #8dc63f)",
        py: "5rem",
      }}
    >
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          color: "white",
          mb: "1.5rem",
          fontSize: {
            xs: "calc(1.625rem + 4.5vw)",
            lg: "2rem",
          },
        }}
      >
        Get the app now!
      </Typography>
      <Stack direction={{ lg: "row" }} spacing={2}>
        <Image src="/images/google-play-badge.svg" width={162} height={48}   />
        <Image src="/images/google-play-badge.svg" width={162} height={48} />
        <Image src="/images/google-play-badge.svg" width={162} height={48} />
      </Stack>
    </Box>
  );
};

export default SixthSection;
