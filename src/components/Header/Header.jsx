import React, { useState, useRef } from "react";
import logo from "../../assets/logo/long-logo.png";
import SearchBar from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !isExpanded);
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
    "h-[7rem]"
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
    "text-slate-600 flex",
    {
      "items-center": !isExpanded,
      "items-start": isExpanded,
    }
  );

  return (
    <>
      <header
        ref={ref}
        className="flex p-4 border-b bg-white z-50 fixed w-full"
      >
        <div className={headerContainerClasses}>
          <div>
            <img src={logo} height={50} width={172} alt="" />
          </div>

          {isExpanded ? (
            <SearchBar toggleExpanded={toggleExpanded} />
          ) : (
            <button onClick={toggleExpanded} className={searchContainerClasses}>
              <div className="input flex items-center border-r">
                <p>Anywhere</p>
              </div>
              <div className="input flex items-center border-r">
                <p>Anyday</p>
              </div>
              <div className="input flex items-center border-r">
                <p>Add Guest</p>
              </div>
              <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">
                <MagnifyingGlassIcon className="h-4 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </button>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className={userIconClasses}>
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
              <hr className="bg-red-500" />
              <li>
                <Link to={"/login"} className="justify-between">
                  Login
                </Link>
                <Link to={"/signup"} className="justify-between">
                  Sign-up
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="avatar online placeholder">
        <div className="bg-primary text-neutral-content rounded-full">
          <span className="text-xl">AI</span>
        </div>
      </div> */}
        </div>
      </header>
      {/* add h-full for full modal */}
      <div className="fixed top-0 left-0 w-full h-15 z-40">
        <div className={modalClasses}></div>
      </div>
    </>
  );
};
