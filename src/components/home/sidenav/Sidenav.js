import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <SidenavTitle title="S" subTitle="pecialities" />
      <ul>
        <li className="sidenavLi">GIS Analysis</li>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">Research</li>
        <li className="sidenavLi">Teaching/Instructing</li>
      </ul>
      <SidenavTitle title="C" subTitle="urrent Projects" />
      <ul>
        <li className="sidenavLi">A Sub-pixel base LST Modelling using Biophysical predictors</li>
        <li className="sidenavLi">Application of GeoAI in Exploring the impact of LST on Groundwater recharge</li>
        <li className="sidenavLi"> Crime Mapping and Prediction using Machine Learning </li>
        <li className="sidenavLi">Geospatial Big Data for Biomass Yield Prediction</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+234 9060163364</li>
        <li className="sidenavLi">aminumusa669@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav