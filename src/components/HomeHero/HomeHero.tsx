import React from "react";
import {
  HomeHeroContainer,
  BackgroundImage,
  Overlay,
  ContentWrapper,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Description,
  SmallImage,
} from "./HomeHero.styles";

const HomeHero: React.FC = () => {
  return (
    <HomeHeroContainer>
      <BackgroundImage />
      <Overlay>
        <ContentWrapper>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <TextContainer>
            <Title>Hey there, I'm Grace</Title>
            <Description>
              Food enthusiast from the UK with a serious crush on Brazilian
              cuisine. Join me on my blog as I passionately explore, savor, and
              review the mouthwatering world of Brazilian food. Get ready to
              taste the deliciousness!
            </Description>
          </TextContainer>
          <SmallImage />
        </ContentWrapper>
      </Overlay>
    </HomeHeroContainer>
  );
};

export default HomeHero;
