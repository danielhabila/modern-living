import React, { useState } from "react";

import sofa from "../assets/sofa.jpg";
import dining from "../assets/dining.jpeg";
import art from "../assets/art.jpg";

import light2 from "../assets/light2.jpg";

const Home = () => {
  return (
    <div className="">
      <div className=" snap-mandatory snap-y overflow-scroll overflow-x-clip h-screen ">
        <div
          style={{
            backgroundImage: `url(${sofa})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center "
        >
          <div className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3">
            <p className="text-3xl md:text-5xl font-mono ">Let the light in</p>
            <p>SHOP LIVING ROOM FURNITURE</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${art})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3">
            <p className="text-3xl md:text-5xl font-mono ">Let the light in</p>
            <p>SHOP LIVING ROOM FURNITURE</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${dining})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3">
            <p className="text-3xl md:text-5xl font-mono ">Let the light in</p>
            <p>SHOP LIVING ROOM FURNITURE</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${light2})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3">
            <p className="text-3xl md:text-5xl font-mono ">Let the light in</p>
            <p>SHOP LIVING ROOM FURNITURE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
