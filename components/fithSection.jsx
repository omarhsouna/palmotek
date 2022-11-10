import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const FithSection = () => {
  return (
    <Box
      sx={{
        py: "15rem",
        backgroundImage: "url(/images/quote.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "#00000080",
        },
      }}
      container
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto", pl: "80px" }}>
        <Typography
          component="h2"
          sx={{
            mb: "1.5rem",
            fontSize: { xs: "calc(1.625rem + 4.5vw)", lg: "5rem" },
            color: "white",
            position: "relative",
          }}
        >
          Instant quote
        </Typography>
        <Button
          sx={{
            cursor: "pointer",
            background: "transparent",
            borderRadius: "50rem",
            border: "1px solid #fff",
            py: "1rem",
            px: "1.5rem",
            color: "white",
            "&:hover": {
              color: "black",
              background: "white",
            },
          }}
        >
          Let's prepare your price estimation
        </Button>
      </Box>
    </Box>
  );
};

export default FithSection;
