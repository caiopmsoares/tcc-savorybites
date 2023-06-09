import React from "react";
import HomeHeroTs from "./components/HomeHero/HomeHeroTs";
import HomeSectionTs from "./components/HomeSection/HomeSectionTs";
import HomeBaseImage from "./components/HomeBaseImages";

const HomeTs: React.FC = () => {
  return (
    <>
      <HomeHeroTs />
      <HomeSectionTs />
      <HomeBaseImage />
    </>
  );
};

export default HomeTs;
