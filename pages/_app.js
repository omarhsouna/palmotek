import { createTheme, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
const theme = createTheme({
  palette: {
    green: {
      main: "#007236",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
