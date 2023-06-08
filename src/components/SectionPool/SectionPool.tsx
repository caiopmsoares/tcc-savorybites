import React from "react";
import {
  SectionContainer,
  SectionTitle,
  Hr,
  ImageContainer,
  Image,
  ImageTitle,
  ImageCaption,
} from "./SectionPool.styles";

interface SectionPoolProps {
  title: string;
  images: Array<string>;
  imageTitles: Array<string>;
  imageCaptions: Array<string>;
}

const SectionPool: React.FC<SectionPoolProps> = ({
  title,
  images,
  imageTitles,
  imageCaptions,
}) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <Hr />
      <ImageContainer>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <Image src={imageUrl} alt={`Image ${index}`} />
            <ImageTitle>{imageTitles[index]}</ImageTitle>
            <ImageCaption>{imageCaptions[index]}</ImageCaption>
          </div>
        ))}
      </ImageContainer>
    </SectionContainer>
  );
};

export default SectionPool;
