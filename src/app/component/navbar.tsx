import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center sticky">
      <div className="logo -z-0 font-semibold flex text-2xl justify-center cursor-default items-center">
        RicWrdhna <span className="text-black bg-white px-2 ms-1 ">Dev</span>
      </div>
      <div className=" text-xl justify-center items-center lg:flex hidden">
        <ul className="flex space-x-4">
          <a className="ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            <li>Profile</li>
          </a>
          <a
            href=""
            className="ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <li>Projects</li>
          </a>
          <a
            href=""
            className="ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <li>Experiences</li>
          </a>
        </ul>
      </div>
      <div className="lg:flex hidden justify-center items-center">
        <button className="flex text-sm justify-center font-semibold items-center bg-white text-black rounded-full py-2 px-4">
          My CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
