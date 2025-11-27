import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="GIS Analyst"
        subTitle="Specialized in spatial analysis, Cartography, and geospatial data interpretation to support informed decision-making"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Data Scientist"
        subTitle="Skilled in analyzing complex datasets, building predictive models, and applying data-driven solutions to real-world problems"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Researcher"
        subTitle="Experienced in conducting rigorous research, analyzing geospatial and environmental data, and publishing actionable insights."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Instructor"
        subTitle="Passionate about teaching GIS, data science, and geospatial technologies, helping learners develop practical skills."
      />
    </div>
  );
};

export default MyServices;
