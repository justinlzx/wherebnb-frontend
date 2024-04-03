import React, { useState, useRef } from 'react';
import logo from "../../assets/logo/long-logo.png";
import { SearchBar } from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";
import { BackButton }  from "../Common/BackButton";
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  useClickAway(ref, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const headerContainerClasses = clsx(
    "container",
    "mx-auto",
    "flex",
    "justify-between",
    "bg-white",
    "py-8",
    "z-50",
    {
      "h-[7rem]": isExpanded,
      "h-[7rem]": !isExpanded,
    }
  );

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "rounded-full",
    "p-4",
    "justify-center",
    "items-center",
    "drop-shadow-md",
    "bg-white",
    {
      "border-b-4": isExpanded,
      "border-b-0": !isExpanded,
    }
  );

  //add a modal for the search bar
  const modalClasses = clsx(
    "absolute",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "z-40",
    "bg-black",
    "bg-opacity-50",
    "transition-opacity duration-300 ease-in-out",
    {
      hidden: !isExpanded,
      block: isExpanded,
      "opacity-0": !isExpanded,
      "opacity-100": isExpanded,
    }
  );

  const userIconClasses = clsx(
    "h-12",
    "w-12",
    "rounded-full",
    "bg-primary",
    "text-neutral-content",
    "text-slate-600 flex", {
       "items-center": !isExpanded, 
       "items-start": isExpanded,
    }
  )

  return (
    <>
      <header
        className="flex justify-between p-4 border-b bg-white w-full"
      >
          <div className="flex justify-start">
            <BackButton sx={{ color:'primary' }}/>
            <Link to="/">
              <img src={logo} height={50} width={172} alt="Logo" />
            </Link>
          </div>

          <div className="flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <GiteOutlinedIcon/>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">My Trips</span>
                <div className="card-actions">
                  <Link to="/check-in" className="btn btn-primary btn-block">View Bookings</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end pl-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </header>
      </>
  );
};
