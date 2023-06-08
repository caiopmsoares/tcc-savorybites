import React from "react";
import { TarjaContainer, Image } from "./HomeBaseImages.styles";
import BaseImage1 from "../../images/baseimage1.png";
import BaseImage2 from "../../images/baseimage2.png";
import BaseImage3 from "../../images/baseimage3.png";
import BaseImage4 from "../../images/baseimage4.png";
import BaseImage5 from "../../images/baseimage5.png";
import BaseImage6 from "../../images/baseimage6.png";

const HomeBaseImage: React.FC = () => {
  return (
    <TarjaContainer>
      <Image src={BaseImage1} alt="Image 1" />
      <Image src={BaseImage2} alt="Image 2" />
      <Image src={BaseImage3} alt="Image 3" />
      <Image src={BaseImage4} alt="Image 4" />
      <Image src={BaseImage5} alt="Image 5" />
      <Image src={BaseImage6} alt="Image 6" />
      <Image src={BaseImage1} alt="Image 1" />
      <Image src={BaseImage2} alt="Image 2" />
      <Image src={BaseImage3} alt="Image 3" />
      <Image src={BaseImage4} alt="Image 4" />
    </TarjaContainer>
  );
};

export default HomeBaseImage;
