import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sofa from "../assets/sofa.jpg";
import dining from "../assets/dining.jpeg";
import art from "../assets/art.jpg";

import light2 from "../assets/light2.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className=" snap-mandatory snap-y overflow-scroll overflow-x-clip h-screen ">
        <div
          style={{
            backgroundImage: `url(${sofa})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center "
        >
          <div
            className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3 cursor-pointer"
            onClick={() => navigate("/furniture")}
          >
            <p className="text-2xl md:text-5xl font-mono ">
              Be comfortable and cozy
            </p>
            <p className="font-mono text-sm md:text-xl">
              SHOP LIVING ROOM FURNITURE
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${art})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div
            className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3 cursor-pointer"
            onClick={() => navigate("/art")}
          >
            <p className="text-2xl md:text-5xl font-mono ">
              Give life to your space
            </p>
            <p className="text-sm md:text-xl">SHOP WALL ART</p>
          </div>
        </div>
        {/* <div
          style={{
            backgroundImage: `url(${dining})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div
            className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3 cursor-pointer"
            onClick={() => navigate("/dining")}
          >
            <p className="text-2xl md:text-5xl font-mono ">
              Lets wine and dine
            </p>
            <p className="text-sm md:text-xl">SHOP DINING</p>
          </div>
        </div> */}
        <div
          style={{
            backgroundImage: `url(${light2})`,
          }}
          className=" w-screen h-screen snap-start bg-center bg-no-repeat bg-cover px-4 grid place-content-center text-center"
        >
          <div
            className="bg-gray-400/40 w-[100vw] shadow-xl space-y-4 p-3 cursor-pointer"
            onClick={() => navigate("/lighting")}
          >
            <p className="text-2xl md:text-5xl font-mono ">Let the light in</p>
            <p className="text-sm md:text-xl">SHOP ROOM LIGHTING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
