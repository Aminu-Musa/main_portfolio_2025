import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm <span className="text-designColor"> Aminu Musa </span></h2>
          <p className="text-sm leading-6 ">
            I am a research-focused GIS and data science professional with expertise in spatial analysis, modelling,  remote sensing, and web-based geospatial applications.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 text-sm ">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Nigeria
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Frelance:</span>
            Available  
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Suleja, Niger State
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
