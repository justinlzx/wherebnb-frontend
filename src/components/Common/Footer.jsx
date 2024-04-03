import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo/long-logo.png";
import { Outlet, useLocation } from "react-router-dom";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Our Partners"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {

  return (
    <footer className="bottom-0 bg-base-200 pt-8 relative">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-1">
          <div className="grid grid-cols-4 justify-between gap-4">
            <div className="flex justify-center md:justify-start md:grid-cols-2">
              <img src={logo} className="h-12" alt="Logo"></img>
            </div>
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">wherebnb</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
