import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
const FourthSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid
      sx={{
        px: "80px",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1320px",
        mx: "auto",
      }}
      container
    >
      <Grid item xs={12} lg={6}>
        <Typography
          sx={{
            fontSize: { xs: "calc(1.475rem + 2.7vw)", lg: "3.5rem" },
            color: "#212529",
            fontWeight: "600",
            mb: "1.5 rem",
          }}
        >
          Our irrigation modem is designed to make you life easy
        </Typography>
        <Typography
          sx={{
            color: "#6c757d",
          }}
        >
          No need for additional internet connection
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{ textAlign: { lg: "right", xs: "center" } }}
      >
        <Image
          src="/images/vcom-box.png"
          width={matches ? 590 : 180}
          height={matches ? 380 : 135}
        />
      </Grid>
    </Grid>
  );
};

export default FourthSection;
