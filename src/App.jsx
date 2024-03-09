import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'


export const App = () => {

  useEffect(() => {
    document.title = "wherebnb";
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}