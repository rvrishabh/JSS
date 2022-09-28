import { ThemeProvider } from "@mui/material";
import Header from "../views/Home/Header";
import theme from "../styles/Theming";
import Features from "../views/Home/features";

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Features />
      </ThemeProvider>
    </div>
  );
}
