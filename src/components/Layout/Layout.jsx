import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";


export const Layout = () => {
  return (
    <>
      <Header />
      <div className="relative top-[10rem] pt-4 container mx-auto">
        <Outlet />
      </div>
    </>
  );
};
