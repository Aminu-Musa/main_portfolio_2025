import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
<div>
  <Title title="Academic" subTitle="Publications" />
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 px-6">
    <BlogCard
      link="https://www.scirp.org/pdf/jgis_2023080315220849.pdf"
      image={blogImgOne}
      title="04 August, 2023"
      subTitle="Spatial Pattern and Distribution of Crime in Suleja Lga, Niger State, Nigeria"
      category="Published paper"
    />
    <BlogCard
      link="https://journal-innovations.com/assets/uploads/doc/ae0aa-813-820.16416.pdf"
      image={blogImgTwo}
      title="15 June, 2023"
      subTitle="Assessment of crime rate during Covid-19 lockdown in Suleja Lga, Niger state, Nigeria"
      category="Published paper"
    />
    <BlogCard
      link="https://www.academia.edu/145165322/ANALYSIS_OF_CRIME_HOTSPOTS_IN_BWARI_AREA_COUNCIL_FEDERAL_CAPITAL_TERRITORY_ABUJA_NIGERIA"
      image={blogImgThree}
      title="02 October, 2024"
      subTitle="Analysis Of Crime Hotspots In Bwari Area Council, Federal Capital Territory, Abuja, Nigeria."
      category="Unpublished"
    />
  </div>
</div>

  );
};

export default Blog;
