import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { ListingsPage } from "./components/pages/ListingsPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { Layout } from "./components/Layout";
import { Results } from "./components/pages/Results";
import { ThemeProvider } from '@mui/material/styles';




export const App = () => {

  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <Routes>
      {/* <ThemeProvider theme={ theme }> */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<ListingsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/results" element={<Results/>}/>
        </Route>
      {/* </ThemeProvider> */}
    </Routes>
    // <div className="p-5">
    //   <h1 className="text-xl h1-2 w-12 border border-2 border-yellow-300 bg-slate-400">hello</h1>
    // </div>
  );
}