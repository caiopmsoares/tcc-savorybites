import React from "react";
import HomeHeroPt from "./components/HomeHero/HomeHeroPt";
import HomeSectionPt from "./components/HomeSection/HomeSectionPt";
import HomeBaseImage from "./components/HomeBaseImages";

const HomePt: React.FC = () => {
  return (
    <>
      <HomeHeroPt />
      <HomeSectionPt />
      <HomeBaseImage />
    </>
  );
};

export default HomePt;
