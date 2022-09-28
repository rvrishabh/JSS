import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#FE5038",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "10px",
          opacity: 1,
          fontFamily: ["Work Sans, sans-serif"].join(","),
          fontWeight: 600,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ["Work Sans, sans-serif"].join(","),
        },
        h1: {
          fontWeight: 550,
          fontSize: "50px",
        },
        h2: {
          fontWeight: 500,
          fontSize: "45px",
          color: "#1B1464",
        },
        body1: {
          fontWeight: 450,
          fontSize: "20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: ["Work Sans, sans-serif"].join(","),
          background: "#fff",
          borderRadius: "14px",
          width: "450px",
        },
      },
    },
  },
});

export default theme;
