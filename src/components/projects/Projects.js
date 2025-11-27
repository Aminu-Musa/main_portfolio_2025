import React, { useEffect, useRef } from "react";
import Title from "../home/Title";
import img1 from "../../assets/work/workImgOne.jpg";
import img2 from "../../assets/work/workImgTwo.jpg";
import img3 from "../../assets/work/workImgThree.jpg";
import img4 from "../../assets/work/workImgFour.jpg";
import img5 from "../../assets/work/workImgFive.jpg";
import img6 from "../../assets/work/workImgSix.jpg";
import img7 from "../../assets/work/workImgSeven.jpg";
import img8 from "../../assets/work/workImgEight.jpg";
import img9 from "../../assets/work/workImgNine.jpg";
import img10 from "../../assets/work/workImgTen.jpg";
import img11 from "../../assets/work/workImgEleven.jpg";
import img12 from "../../assets/work/workImgTwelve.jpg";
import img13 from "../../assets/work/workImgThirteen.jpg";
import img14 from "../../assets/work/workImgFourteen.png";
import img15 from "../../assets/work/workImgFifteen.jpg";
import img16 from "../../assets/work/workImgSixteen.jpg";
import img17 from "../../assets/work/workImgSeventeen.jpg";
import img18 from "../../assets/work/workImgEighteen.jpg";
import img19 from "../../assets/work/workImgNineteen.jpg";
import img20 from "../../assets/work/workImgTwenty.jpg";
import img21 from "../../assets/work/workImgTwentyone.jpg";
import img22 from "../../assets/work/workImgTwentytwo.jpg";
import img23 from "../../assets/work/workImgTwentythree.jpg";
import img25 from "../../assets/work/workImgTwentyfive.jpg";
import img26 from "../../assets/work/workImgTwentysix.jpg";
import img27 from "../../assets/work/workImgTwentyseven.jpg";
// LightGallery (npm)
import lightGallery from "lightgallery";

// Plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";

// CSS (npm)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";

const projectData = [
  {
    title: "Topographic map",
    location: "Ajeokuta, Nigeria",
    tools: "ArcGIS",
    dataset: "SRTM DEM, OSM Data",
    image: img1,
  },
  {
    title: "Samples location map",
    location: "Ajeokuta, Nigeria",
    tools: "ArcGIS",
    dataset: "SRTM DEM, GPS Data",
    image: img2,
  },
  {
    title: "Election Map",
    location: "Kogi State, Nigeria",
    tools: "ArcGIS Pro, GEE",
    dataset: "SRTM DEM, OSM Data",
    image: img3,
  },
  {
    title: "Digitized Soil Map",
    location: "Kogi State, Nigeria",
    tools: "ArcGIS Pro",
    dataset: "Nigeria Soil Survey",
    image: img4,
  },
  {
    title: "Land use Land cover Map, 2022",
    location: "Kogi State, Nigeria",
    tools: "ArcGIS Pro",
    dataset: "Sentinel-2 Imagery",
    image: img5,
  },
  {
    title: "Digitized Vegetation Zone Map",
    location: "Kogi State, Nigeria",
    tools: "ArcGIS Pro",
    dataset: "Nigeria Vegetation Map",
    image: img6,
  },
  {
    title: "Lake Chad Conventional Basin Map",
    location: "Lake Chad Basin",
    tools: "ArcGIS Pro",
    dataset: "HydroSHEDS, HDX Data",
    image: img7,
  },
  {
    title: "Surface Water Dynamic Monitoring",
    location: "Lake Chad",
    tools: "GEE, ArcGIS Pro",
    dataset:
      "Surface water was extracted from Landsat Imagery using Automated Water Extraction Index (AWEI)",
    image: img8,
  },
  {
    title: "Lineament Map",
    location: "Abuja, Nigeria",
    tools: "PCI Geomatica, QGIS",
    dataset: "SRTM DEM & Nigeria Lineament Map",
    image: img9,
  },
  {
    title: "Groundwater Potential Modelling",
    location: "Abuja, Nigeria",
    tools: " Python, Grass GIS, QGIS, ArcGIS, AHP ",
    dataset:
      "LULC, SRTM DEM, Soil, Lineament, Rainfall, Slope, Drainage, Depth to bedrock, Distance to drainage, Lithology",
    image: img10,
  },
  {
    title: "Aquifer Anisotropy Map",
    location: "Abuja",
    tools: "GPS, QGIS",
    dataset: "Vertical Electrical Sounding (VES) Data",
    image: img11,
  },
  {
    title: "2011, LULC Map",
    location: "Ajeokuta, Nigeria",
    tools: "ArcGIS Pro",
    dataset:
      "Machine learning classification of Landsat Imagery using Support Vector Machine (SVM) Algorithm",
    image: img12,
  },
  {
    title: "Land surface Temp. Map",
    location: "Onitsha, Nigeria",
    tools: "Google Colab, GEE",
    dataset: "Landsat 8 SR Image",
    image: img13,
  },
  {
    title: "Land surface Temp. Map",
    location: "Nnewi, Nigeria",
    tools: "Google Colab, GEE",
    dataset: "Landsat 8 SR Image",
    image: img14,
  },
  {
    title: "Crime Hotspot Map",
    location: "Suleja, Nigeria",
    tools: "Getis*Ord, IDW, ArcGIS Pro",
    dataset: "Crime data",
    image: img15,
  },
  {
    title: "Point Location Map",
    location: "Lokoja, Nigeria",
    tools: "ArcGIS Pro",
    dataset: "GPS",
    image: img16,
  },
  {
    title: "Study Area Map",
    location: "Niger Delta, Nigeria",
    tools: "QGIS",
    dataset: " GPS",
    image: img17,
  },
  {
    title: "Bus Terminal Location Map",
    location: "Abuja, Nigeria",
    tools: "ArcGIS Pro, Excel",
    dataset: "GPS",
    image: img18,
  },
  {
    title: "Topographic Map",
    location: "Suleja, Nigeria",
    tools: "ArcGIS, Google Earth Map",
    dataset: "HDX, OSM & SRTM Data",
    image: img19,
  },
  {
    title: "Property value Map",
    location: "Anyigba, Nigeria",
    tools: "ArcGIS",
    dataset: "GPS",
    image: img20,
  },
  {
    title: "Public School Location Map",
    location: "Ankpa, Nigeria",
    tools: "ArcGIS, Excel",
    dataset: "GPS",
    image: img21,
  },
  {
    title: "Borehole & Well Location Map",
    location: "Minna, Nigeria",
    tools: "ArcGIS, GPS",
    dataset: "HDX, OSM & SRTM Data",
    image: img22,
  },
  {
    title: "Preliminary site survey Map",
    location: "Omala, Nigeria",
    tools: "ArcGIS",
    dataset: "GPS",
    image: img23,
  },

  {
    title: "Preliminary site survey Map",
    location: "Omala, Nigeria",
    tools: "ArcGIS",
    dataset: "GPS",
    image: img25,
  },

  {
    title: "Methodology Flowchart, GWP Modelling",
    location: "Suleja, Nigeria",
    tools: "Ms word, Photoshop",
    dataset: "AHP & GIS",
    image: img26,
  },
  {
    title: "Lithological Map Processing",
    location: "Ajeokuta, Nigeria",
    tools: "ArcGIS, GPS",
    dataset: "Dips, Lithology, Strike Direction & SRTM Data",
    image: img27,
  },
];

const Projects = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    lightGallery(galleryRef.current, {
      selector: ".lg-item",
      speed: 500,
      download: true,
      thumbnail: true,
      zoom: true,
      fullscreen: true,
      share: true,
      plugins: [lgZoom, lgThumbnail, lgFullscreen, lgShare],
    });
  }, []);

  return (
    <section id="projects" className="w-full">
      <Title title="Map" subTitle="Gallery" />

      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4"
      >
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.image}
            data-sub-html={`<h4>${project.location}: ${project.title}</h4><p>${project.tools}: ${project.dataset} </p>`}
            className="lg-item group bg-bodyColor border border-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={project.image.replace("800x600", "400x300")}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold text-designColor">
                {project.title}
              </h3>
              <div className="flex items-center mt-1 gap-1 center justify-center">
                <p className="text-xs text-zinc-400"> {project.tools}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
