import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="GIS & Web Development Trainer"
          subTitle="A&H New Media Innovation"
          des="Trained and mentored learners in GIS (QGIS, ArcGIS), Web Development (HTML/CSS/JS), and computer literacy."
        />
        <ResumeCard
          badge="2019 – 2022"
          title="GIS Technical Support Assistant"
          subTitle="Kogi State University, GIS Lab."
          des="Facilitated practical spatial analysis using QGIS, ArcGIS, and Google Earth Engine."
        />
        <ResumeCard
          badge="2022 – 2023"
          title="Research Assistant (NYSC)"
          subTitle="Raw Materials Research & Development Council (RMRDC), Abuja"
          des="Worked on geospatial data collection, mineral mapping, and report preparation."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2018 - 2021"
          title="Kogi State University"
          subTitle="Anygba"
          des="Graduated with 2:1 (4.3 CGPA); strong foundation in GIS, Spatial Analysis, and Environmental Studies. Final project: Impact of COVID-19 Lockdown on Crime Rate in Suleja."
        />
        <ResumeCard
          badge="2023 - 2024"
          title="Rework Academy"
          subTitle="Abuja"
          des="Completed intensive MERN stack training (MongoDB, Express.js, React.js, Node.js), gaining hands-on experience building responsive web applications and RESTful APIs."
        />
        <ResumeCard
          badge="2024 - 2025"
          title="Rework Academy"
          subTitle="Abuja"
          des="Data Science Training: Proficient in Python (Pandas, NumPy, Scikit-learn) for ML, statistical modeling, and visualization."
        />
      </div>
    </div>
  );
};

export default Education;
