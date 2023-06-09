import styled from "styled-components";
import heroBanner from "../../images/herobanner.png";
import heroImage from "../../images/heroimage.png";
import heroLateral from "../../images/herolateral.png";

export const HomeHeroContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    height: 100%;
    margin-bottom: 0px;
  }
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
    //alterado agora
    position: relative;
    height: 150px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: -20%;
  left: 0;
  height: 65%;
  width: 100%;
  background-color: #0b132b;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    //alterado agora
    position: relative;
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
  width: 100%;
  height: 100%;
  padding: 0 3em;
  z-index: 1;

  @media (max-width: 768px) {
    //alterado agora
    display: block;
    justify-content: center;
    align-items: flex-start;
    height: fit-content;
    margin-top: -90px;
    padding: 0 3em;
  }
`;

export const ImageContainer = styled.div`
  height: 300px;
  display: flex;
  margin-top: -150px;
  @media (max-width: 768px) {
    margin-bottom: 2em;
    width: 100%;
    margin-top: 0px;
  }
`;

export const Image = styled.div`
  width: 260px;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    //adicionado agora
    width: 100%;
    height: 100%;
    background-size: cover;
    justify-content: center;
    background-position: 25% 20%;
  }
`;

export const TextContainer = styled.div`
  margin-left: 4em;
  color: #faf7ee;
  width: 50%;

  @media (max-width: 768px) {
    //alterado agora
    width: 100%;
    margin-left: 0px;
    text-align: left;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
`;

export const SmallImage = styled.div`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  width: 150px;
  height: 160px;
  background-image: url(${heroLateral});
  background-size: cover;
  background-position: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;
