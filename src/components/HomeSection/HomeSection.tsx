import React from "react";
import {
  SectionContainer,
  SectionTitle,
  Divider,
  SectionDescription,
  ImageGrid,
  ImageContainer,
  ImageWrapper,
  ImageTitle,
  ImageDescription,
  ReadMore,
} from "./HomeSection.styles";

import { Link } from "react-router-dom";

import chickenImage from "../../images/chicken.png";
import chocolateImage from "../../images/chocolate.png";
import energyImage from "../../images/energy.png";
import carnivoresImage from "../../images/carnivore.png";
import pieImage from "../../images/pie.png";
import codfishImage from "../../images/codfish.png";
import blissImage from "../../images/bliss.png";
import cheesyImage from "../../images/cheesy.png";

const HomeSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>mY reviews</SectionTitle>
      <Divider />
      <SectionDescription>
        Embark on a mouthwatering journey through the delectable realm of
        Brazilian cuisine with my latest reviews
      </SectionDescription>
      <ImageGrid>
        <ImageContainer>
          <ImageWrapper>
            <img src={chickenImage} alt="Chicken" />
            <ImageTitle>Chicken cloud bites</ImageTitle>
            <ImageDescription>
              Crispy dough balls filled with juicy chicken. Perfectly comforting
              and satisfying snack.
            </ImageDescription>
            <ReadMore>
              <Link to="/section">READ MORE &gt;</Link>
            </ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={chocolateImage} alt="Chocolate" />
            <ImageTitle>chocolate truffles</ImageTitle>
            <ImageDescription>
              Condensed milk and cocoa delights rolled in sprinkles. Perfection
              in bite-sized form.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={energyImage} alt="Energy" />
            <ImageTitle>energy boost</ImageTitle>
            <ImageDescription>
              Frozen açaí berries topped with granola and honey. Fuel for your
              superhero adventures.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={carnivoresImage} alt="Carnivores" />
            <ImageTitle>Carnivore's Delight</ImageTitle>
            <ImageDescription>
              Black bean stew with sausages, pork ribs, and beef. A carnivore's
              dream come true.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={pieImage} alt="Pie" />
            <ImageTitle>Pie Perfection</ImageTitle>
            <ImageDescription>
              A medley of chicken, shrimp, or hearts of palm filling. Comforting
              and satisfying.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={codfishImage} alt="Codfish" />
            <ImageTitle>Codfish Delights</ImageTitle>
            <ImageDescription>
              Crispy fritters with salted cod, potatoes, and herbs.
              Portuguese-inspired with a Brazilian twist.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={blissImage} alt="Bliss" />
            <ImageTitle>Brazilian Bliss</ImageTitle>
            <ImageDescription>
              Cachaça, lime, sugar, and ice combine for a refreshing and tangy
              cocktail.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
        <ImageContainer>
          <ImageWrapper>
            <img src={cheesyImage} alt="Cheesy" />
            <ImageTitle>Cheesy bliss bites</ImageTitle>
            <ImageDescription>
              Soft, chewy rolls bursting with cheesy goodness. The perfect blend
              of savory and indulgence.
            </ImageDescription>
            <ReadMore>READ SOON</ReadMore>
          </ImageWrapper>
        </ImageContainer>
      </ImageGrid>
    </SectionContainer>
  );
};

export default HomeSection;
