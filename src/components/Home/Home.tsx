import React from "react";
import HomeHero from "../HomeHero";
import HomeSection from "../HomeSection";
import HomeBaseImage from "../HomeBaseImages";

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeSection />
      <HomeBaseImage />
    </>
  );
};

export default Home;
