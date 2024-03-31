import React, { useState, useRef } from 'react';
import logo from "../../assets/logo/long-logo.png";
import { SearchBar } from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { BackButton }  from "../Common/BackButton";
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
        className="flex justify-between p-4 border-b bg-white z-40 w-full"
      >
          <div className="flex justify-start">
            <BackButton sx={{ color:'primary' }}/>
            <img src={logo} height={50} width={172} alt="Logo" />
          </div>

          <div>
            <button>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-12 h-12 rounded-full"/>
              </button>
          </div>
      </header>
      </>
  );
};
