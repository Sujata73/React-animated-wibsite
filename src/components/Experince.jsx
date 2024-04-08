import React from "react";
import suju from "../components/data/experince.json";
const Experince = () => {
  return (
    <div className="mt-40 mx-5" id="experince">
      <h1 className="text-center  font-bold text-3xl">Experince</h1>
      {suju.map((data) => (
        <div
          className=" flex justify-center items-center bg-slay-400 w-full md:w-[700px] text-center  m-auto mt-10 p-5 gap-10 border-2 border-yellow-500 suju"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="">
            <img src={`/assets/${data.imageSrc}`} className="flex  " />
          </div>
          <div>
            <h1 className="font-bold md:text-xl">{data.role}</h1>
            <h4 className="font-semibold  text-sm md:text-md">
              <spna className="text-green-700">
                {data.startDate} {data.endDate}{" "}
              </spna>
              <span className="text-yellow-500">{data.location}</span>
            </h4>
            <h5 className="font-semibold  text-[12px] md:text-md text-yellow-500">
              {data.experiences[0]}
            </h5>
            <h5 className="font-semibold  text-[12px] md:text-md text-yellow-500">
              {data.experiences[1]}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experince;
