import React from "react";
import suju from "../components/data/skills.json";
const Skill = () => {
  console.log("fg", suju);
  return (
    <div className="text-center mt-40" id="skills">
      <h1 className="font-bold text-2xl">Skills</h1>
      <div className="flex md:w-[700px] m-auto items-center justify-center flex-wrap">
        {suju.map((item) => (
          <>
            <div
              className="m-5 mt-10 w-[250px] bg-black text-center p-5 border border-yellow-500 suju"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                src={`/assets/${item.imageSrc}`}
                className="w-[70px] m-auto "
              />
              <h3>{item.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skill;
