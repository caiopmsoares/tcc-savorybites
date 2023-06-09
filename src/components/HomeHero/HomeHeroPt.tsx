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
            <Title>OLÁ, MEU NOME É GRACE</Title>
            <Description>
              Inglesa entusiasta de comida com uma paixão séria pela cozinha
              brasileira. Junte-se a mim no meu blog enquanto exploro e avalio o
              apetitoso mundo da culinária brasileira. Saboreie essas delícias
              comigo!
            </Description>
          </TextContainer>
          <SmallImage />
        </ContentWrapper>
      </Overlay>
    </HomeHeroContainer>
  );
};

export default HomeHero;
