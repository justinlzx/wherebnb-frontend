import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Outlet, Route, Routes } from 'react-router-dom'
import { ListingsPage } from "./components/pages/ListingsPage";
import { LoginPage } from "./components/pages/LoginPage";
import { List } from "@mui/material";
import { Layout } from "./components/Layout/Layout";



export const App = () => {
  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<ListingsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Route>
    </Routes>
    // <div className="App">
    //   <div className="">
    //     <Header />
    //     <ListingsPage />
    //     <LoginPage />
    //   </div>
    //   <Outlet />
    // </div>
  );
}
