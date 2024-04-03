import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "var(--primary-color)", // Use primary color variable
    },
    secondary: {
      main: "var(--secondary-color)", // Use secondary color variable
    }
  },
});

export const App = () => {
  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="App"> {/* Apply the 'App' class here */}
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Outlet />
          <ToastContainer />
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
    </>
  );
};
