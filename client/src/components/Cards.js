import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Cards = () => {
  return (
    <div className="px-[1rem] pt-0 grid place-items-center overflow-x-clip mb-8">
      <div className=" w-full max-w-sm h-[50vh] bg-[#c6ccd4] rounded-md shadow-xl ">
        <div className="w-[fit] h-[70%] border-b-2 rounded-t-md"></div>

        <div className="flex justify-around  space-y-2">
          <div>
            <p>Piazza sofa</p>
            <p>$4,000</p>
          </div>
          <PlusCircleIcon className="w-9" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
