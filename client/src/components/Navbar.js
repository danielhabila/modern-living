import React, { useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      <div className="absolute flex justify-between items-center w-screen py-3 px-[0.7rem] md:px-[2.5rem] bg-white/80">
        <div>
          <h1 className="cursor-pointer font-mono text-2xl font-bold">
            Modern/Living
          </h1>
        </div>
        <div className="hidden md:space-x-8 md:flex">
          <a href="/furniture">Furniture</a>
          <a href="/dining">Dining</a>
          <a href="/accessories">Wall Art</a>
          <a href="/lighting">Lighting</a>
        </div>
        <div>
          <ShoppingCartIcon className="hidden md:flex w-7 max-md:mr-6" />
        </div>
        <div onClick={handleNav} className="hidden max-md:flex cursor-pointer">
          <ShoppingCartIcon className="w-7 mr-6" />
          {!nav ? <XMarkIcon className="w-7" /> : <Bars3Icon className="w-7" />}
        </div>
      </div>
      <div className="relative">
        <div
          className={
            !nav
              ? "fixed h-[25%] w-[100%] inset-x-0 inset-y-14 bg-white text-black grid grid-col place-content-center text-center space-y-4 rounded-b-xl"
              : "hidden"
          }
        >
          <a href="/furniture">Furniture</a>
          <a href="/dining">Dining</a>
          <a href="/accessories">Wall Art</a>
          <a href="/lighting">Lighting</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
