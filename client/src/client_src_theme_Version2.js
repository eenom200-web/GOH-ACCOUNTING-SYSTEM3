import { createTheme } from "@mui/material/styles";

const getTheme = (
  mode = "light",
  primary = "#003b4a",
  secondary = "#cc9f53",
  background = "#ffffff"
) =>
  createTheme({
    palette: {
      mode,
      primary: { main: primary },
      secondary: { main: secondary },
      background: { default: background, paper: background },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: primary,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === "dark" ? "#003b4a" : "#fff",
          },
        },
      },
    },
  });

export default getTheme;