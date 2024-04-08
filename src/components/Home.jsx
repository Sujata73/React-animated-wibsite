import React from "react";
import pdf from "../pdf/resume.pdf";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Portfolio",
        "My name is Sujata Shrestha",
        "I am Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(ref.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row  items-center justify-ceenter  gap-20 mx-5 md:mx-32 mt-32 " id="home">
      <div className="lg:w-[650px] h-[180px] border border-yellow-500 p-10 text-center  suju   " data-aos="fade-up-right" data-aos-duration="1000" >
        <h1 className="font-bold lg:text-xl " ref={ref}>

        </h1>
        <a href={pdf} download="Resume.pdf">
          <button className="border border-yellow-500 p-2  mt-2 lg:mt-5 text-yellow-500 hover:bg-yellow-600 hover:text-white">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex justify-center items-center animation duration-300 " data-aos="fade-up-left" data-aos-duration="1000" >
        <img
          src={require("../../src/assets/product11.jpg")}
          className="w-[70%] rounded-[60%] h-[350px] border-4 border-yellow-500 superman"
          />
      </div>
    </div>
  );
};

export default Home;
