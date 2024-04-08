import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [data, setdata] = useState(false);
  return (
    <div className=" mx-5 md:mx-32 mt-10 ">
      <div
        className="flex justify-between "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="font-bold text-3xl cursor-pointer">Portfolio</h1>

        <div className="">
          <div className="lg:flex  hidden lg:flex-row gap-10 font-semibold text-md  ">
            <a href="#home" className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer pb-3">
              Home
            </a>
            <a href="#experince" className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer ">
              Experince
            </a>
            <a href="#skills" className=" hover:border-b-2  hover:border-yellow-500  cursor-pointer">
              Skills
            </a>
            <a href="#project" className="  hover:border-b-2  hover:border-yellow-500 hover:yellow-500 cursor-pointer">
              Project
            </a>
            <a href="#contact" className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:hidden mx-5 z-10">
          {data ? (
            <RxCross2 onClick={() => setdata(!data)} />
          ) : (
            <RxHamburgerMenu onClick={() => setdata(!data)} />
          )}
        </div>
      </div>
      <ul
        className={`${
          data
            ? "flex  justify-center items-center p-20 flex-col gap-10 font-semibold text-md absolute w-full top-0 left-0 bg-black transition duration-300 ease-in-out"
            : "absolute left-[-100%]"
        } `}
      >
        <li className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer pb-3">
          Home
        </li>
        <li className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer ">
          Experince
        </li>
        <li className=" hover:border-b-2  hover:border-yellow-500  cursor-pointer">
          Skills
        </li>
        <li className="  hover:border-b-2  hover:border-yellow-500 hover:yellow-500 cursor-pointer">
          Project
        </li>
        <li className=" hover:border-b-2  hover:border-yellow-500 cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
