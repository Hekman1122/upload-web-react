import React from "react";
import logo from "../assets/logo.png";
const Title = () => {
  return (
    <div className="section-div">
      <div>
        <div className="flex  items-center gap-4 mb-4 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-cover rounded-full shadow-md"
          />
          <h1 className="text-2xl font-semibold text-gray-500 tracking-wider">
            Catllery
          </h1>
        </div>
        <div className="text-center py-2">
          <h1 className="font-semibold text-4xl tracking-wide text-yellow-700/90 mb-4">
            Upload your images
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
