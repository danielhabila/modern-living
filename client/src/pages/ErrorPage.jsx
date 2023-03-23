import React from "react";
import dog from "../assets/dogg.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-100">
      <img src={dog} className="rounded-full w-80" alt="" />
      <div className="space-y-4 text-center pt-4">
        <h2 className="font-bold text-4xl md:text-5xl ">
          Uh oh! This page doesn’t exist.
        </h2>
        <p className="font-medium text-md md:text-lg text-gray-500">
          Head to our
          <span className="text-blue-500">
            {" "}
            <a href="/">homepage</a>
          </span>{" "}
          that does exist, or try double-checking the URL.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
