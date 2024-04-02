import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Common/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Outlet className="mb-auto" />
      <Footer />
    </div>
  );
};