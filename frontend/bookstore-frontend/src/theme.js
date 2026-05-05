import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#4f46e5" },
    secondary: { main: "#22c55e" },
    background: { default: "#f8fafc" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;