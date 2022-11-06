import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
const SecondSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={{ background: "linear-gradient(45deg, #006838, #8dc63f)" }}>
      <Grid
        sx={{
          pt: "185px",
          pb: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1320px",
          mx: "auto",
        }}
        container
      >
        <Grid item xs={12} lg={6} sx={{ mx: "auto" }}>
          <Stack spacing="24px">
            <Typography
              sx={{
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              You already invested in a manual irrigation network?
            </Typography>
            <Typography
              sx={{
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Now you want to automate it?
            </Typography>
            <Typography
              sx={{
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Easy!
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ textAlign: { xs: "center", lg: "right" } }}
        >
          <Image
            src="/images/vcom-box.png"
            width={matches ? 590 : 180}
            height={matches ? 380 : 135}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondSection;
