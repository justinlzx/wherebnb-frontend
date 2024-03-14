import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Filter } from "./Filter/Filter";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="z-1 relative top-[10rem] pt-4 container mx-auto">
        <Outlet/>
      </div>
    </>
  );
};
