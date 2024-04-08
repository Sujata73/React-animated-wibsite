import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <div className="" id="contact">
      <h1 className="font-semibold text-3xl text-center  mt-20">Contact Me</h1>
      <div
        className="flex  flex-col md:flex-row justify-center items-center"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a className="bg-black m-10 h-[70px] w-[70px] text-center flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju">
          <FaInstagramSquare className="text-2xl" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="bg-black m-10 h-[70px] w-[70px] flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju"
        >
          <FaFacebook className="text-2xl" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="bg-black m-10 h-[70px] w-[70px] flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="bg-black m-10 h-[70px] w-[70px] flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju"
        >
          <IoLogoTwitter className="text-2xl" />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          className="bg-black m-10 h-[70px] w-[70px] flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="mailto:shresthasujata300@gmail.com"
          target="_blank"
          className="bg-black m-10 h-[70px] w-[70px] flex justify-center items-center rounded-full border-yellow-500 border-2 hover:bg-blue-950 hover:suju"
        >
          <SiGmail className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
