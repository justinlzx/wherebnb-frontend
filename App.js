import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { ListingsPage } from "./components/pages/ListingsPage";
import { LoginPage } from "./components/pages/LoginPage";
import { Layout } from "./components/Layout/Layout";
import { Results } from "./components/pages/Results";

export const App = () => {

  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <Routes>
      <Route path="*" element={<Layout/>}>
        <Route index element={<ListingsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/results" element={<Results/>}/>
      </Route>
    </Routes>
  );
}