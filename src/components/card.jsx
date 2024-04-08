import React from "react";
import project from "../components/data/projects.json";
const card = ({ title, img, description, demo, source }) => {
  return (
    <div className="  mx-5 lg:mx-32 ">
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  ">
        {project.map((item) => (
          <>
            <div className="border   border-yellow-500 p-5 space-y-1 text-center suju "  data-aos="flip-left" data-aos-duration="1000">
              <img
                src={item.imageSrc}
                className="lg:w-[200px] lg:h-[100px] m-auto border-2 rounded-md border-yellow-500"
              />
              <h1 className="font-semibold text-md text-center">
                {item.title}
              </h1>
              <h4 className="text-sm pb-5">{item.description}</h4>
              <a href={item.demo} className="border bg-yellow-500 p-1 rounded-md ">
                Demo
              </a>
              <a href={item.source} className="border bg-yellow-500 p-1 ml-5 rounded-md">
                Code
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default card;
