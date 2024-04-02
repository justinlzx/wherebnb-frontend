import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Common/Footer";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#002b69",
    },
    secondary: {
      main: "#717171",
    },
  },
});

export const App = () => {
  // Set document title on component mount
  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header /> {/* Header component */}
      <Outlet /> {/* Router outlet */}
      <Footer /> {/* Footer component */}
      <ToastContainer /> 
    </ThemeProvider>
  );
};
