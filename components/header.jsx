import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import DropdownLanguages from "./dropdownLanguages";
const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        background: "white",
        py: "1rem",
        boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 8%)",
        width: "100%",
        px: { xs: "0", sm: "10px", lg: "83px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Palmotek Logo"
          width={matches ? 200 : 150}
          height={74}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              mr: { xs: "5px", lg: "20px" },
              width: { xs: "80px", lg: "120px" },
            }}
            variant="outlined"
            color="green"
          >
            Devis
          </Button>
          <DropdownLanguages />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
