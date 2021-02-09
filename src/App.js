import React from "react";
import { ThemeProvider } from "styled-components";
import { LightMode, NightMode } from "./Themes/Theme";
import { useDarkMode } from "./Themes/useDarkMode";
import Routes from "./Routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyle";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  //Tema da Aplicação
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "Light" ? LightMode : NightMode;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
