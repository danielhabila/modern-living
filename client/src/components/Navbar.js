import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();

  const [cartToggle, setCartToggle] = useState(false);

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative z-10 ">
      <div className="absolute flex justify-between items-center w-screen py-3 px-[1rem] md:px-[2.5rem] bg-white/80 h-fit ">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer font-mono text-xl font-bold"
          >
            Modern/Living
          </h1>
        </div>
        <div className="hidden md:space-x-8 md:flex">
          <a href="/furniture">Furniture</a>
          <a href="/dining">Dining</a>
          <a href="/accessories">Wall Art</a>
          <a href="/lighting">Lighting</a>
        </div>
        <button className="hidden md:flex relative">
          <ShoppingBagIcon
            onClick={() => setCartToggle(!cartToggle)}
            className=" w-7 "
          />
          <span className="absolute right-5 w-5 h-5 bg-yellow-400 rounded-full grid place-content-center">
            0
          </span>
        </button>
        <div className="hidden max-md:flex cursor-pointer items-center">
          <div className="relative flex">
            <ShoppingBagIcon
              onClick={() => setCartToggle(!cartToggle)}
              className="w-7 "
            />
            <span className="absolute right-5 w-5 h-5 bg-yellow-400 rounded-full grid place-content-center">
              0
            </span>
          </div>
          <div onClick={handleNav} className="ml-6">
            {!nav ? (
              <XMarkIcon className="w-7" />
            ) : (
              <Bars3Icon className="w-7" />
            )}
          </div>
        </div>
        {cartToggle && <Cart setCartToggle={setCartToggle} />}
      </div>
      <div className="relative">
        <div
          className={
            !nav
              ? "fixed h-[25%] w-[100%] inset-x-0 inset-y-12 bg-white text-black grid grid-col place-content-center text-center space-y-4 rounded-b-xl"
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
