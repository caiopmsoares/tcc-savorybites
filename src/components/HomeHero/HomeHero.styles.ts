import styled from "styled-components";
import heroBanner from "../../images/herobanner.png";
import heroImage from "../../images/heroimage.png";
import heroLateral from "../../images/herolateral.png";

export const HomeHeroContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin-bottom: 150px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${heroBanner});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: -20%;
  left: 0;
  height: 60%;
  width: 100%;
  background-color: #0b132b;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    //alterado agora
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;

  margin-bottom: 16%;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    //adicionado agora
    width: 100%;
    height: 100%;
    background-position: bottom;
  }
`;

export const TextContainer = styled.div`
  margin-left: 20px;
  color: #faf7ee;
  width: 50%;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    //alterado agora
    width: 100%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const SmallImage = styled.div`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  width: 110px;
  height: 120px;
  background-image: url(${heroLateral});
  background-size: cover;
  background-position: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;
