import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Common/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="z-1 relative top-[10rem] p-5 container mx-auto">
        <Outlet className="p-8" />
      </div>
      <Footer/>
    </>
  );
};
