import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom'

export const App = () => {


  return (
    <div className="App">
      <div class="z-3">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}
