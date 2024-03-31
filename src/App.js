import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Common/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <div>
        <Footer/>
      </div>
      <ToastContainer />
    </div>
  );
}