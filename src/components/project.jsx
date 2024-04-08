import React from "react";
import Card from "./card";
const project = ({ title, img }) => {
  return (
    <div className="space-y-20 mt-20" id="project">
      <h1 className="text-center font-bold text-3xl">projects</h1>
      <div className="md:mx-32 mx-5">
        <Card />
      </div>
    </div>
  );
};

export default project;
