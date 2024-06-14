import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center z-50 sticky top-0">
        <div className="logo -z-0 font-semibold flex text-2xl justify-center cursor-default items-center">
          RicWrdhna <span className="text-black bg-white px-2 ms-1 ">Dev</span>
        </div>
        <div
          className="lg:hidden flex rounded-full px-2.5 py-1.5 cursor-pointer bg-white hover:bg-slate-300"
          onClick={toggleMenu}
        >
          <TbMenu2 className="text-lg text-[#221e1e]"></TbMenu2>
        </div>
        <div className="text-xl justify-center items-center lg:flex hidden">
          <ul className="flex space-x-4">
            <a
              href="/"
              className={`${
                pathname == "/" ? "after:h-1 after:w-full " : ""
              } ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
            >
              <li>Profile</li>
            </a>
            <a
              href="/projects"
              className={`${
                pathname == "/projects" ? "after:h-1 after:w-full " : ""
              } ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
            >
              <li>Projects</li>
            </a>
            <a
              href="/experiences"
              className={`${
                pathname == "/experiences" ? "after:h-1 after:w-full " : ""
              } ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
            >
              <li>Experiences</li>
            </a>
            <a
              href="/contact-me"
              className={`${
                pathname == "/contact-me" ? "after:h-1 after:w-full " : ""
              } ext-3xl relative after:bg-white after:rounded after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="lg:flex hidden justify-center items-center">
          <a href="/cv" target="_blank">
            <button className="flex text-sm justify-center font-semibold items-center bg-white text-black rounded-full py-2 px-4">
              My CV
            </button>
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-neutral-600 bg-opacity-80 shadow-lg z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={closeMenu}
              />
            </div>
            <ul className="flex flex-col space-y-4 p-4">
              <a
                href="/"
                className={`${
                  pathname == "/"
                    ? "font-medium w-full bg-neutral-400 bg-opacity-30 rounded py-0.5"
                    : ""
                } text-lg cursor-pointer`}
                onClick={closeMenu}
              >
                <li className="px-2">Profile</li>
              </a>
              <a
                href="/projects"
                className={`${
                  pathname == "/projects"
                    ? "font-medium w-full bg-neutral-400 bg-opacity-30 rounded py-0.5"
                    : ""
                } text-lg cursor-pointer`}
                onClick={closeMenu}
              >
                <li className="px-2">Projects</li>
              </a>
              <a
                href="/experiences"
                className={`${
                  pathname == "/experiences"
                    ? "font-medium w-full bg-neutral-400 bg-opacity-30 rounded py-0.5"
                    : ""
                } text-lg cursor-pointer`}
                onClick={closeMenu}
              >
                <li className="px-2">Experiences</li>
              </a>
              <a
                href="/cv"
                target="_blank"
                className="text-lg cursor-pointer"
                onClick={closeMenu}
              >
                <li className="px-2">CV</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
