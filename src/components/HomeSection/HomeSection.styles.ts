import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 60px 3em 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionTitle = styled.h2`
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 44px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
  margin-bottom: 10px;
`;

export const SectionDescription = styled.p`
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
  text-align: left;
  margin-bottom: 10px;
  color: #54596a;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 35px;
  margin-top: 1.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    row-gap: 35px;
    margin-top: 1em;
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: calc(25% - 15px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 90px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const ImageTitle = styled.h3`
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 800;
  font-size: 1.1em;
  line-height: 28px;
  text-transform: uppercase;
  color: #0b132b;
  margin-top: 15px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }
`;

export const ImageDescription = styled.p`
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 1.6em;
  text-align: justify;
  color: #0b132b;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ReadMore = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #9da0aa;
  margin-top: auto;

  a {
    font-family: "Lora", serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    color: #028a35;
  }
`;
