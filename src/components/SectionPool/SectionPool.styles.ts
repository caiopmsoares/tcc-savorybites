import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-bottom: 10px;
  justify-content: center;
  margin: 10%;
  margin-top: -20%;
`;

export const SectionTitle = styled.h1`
  font-size: 2.125rem;
  margin-bottom: 10px;
`;

export const Hr = styled.hr`
  flex-grow: 1;
  height: 2px;
  background-color: #c6c6c6;
  border-style: none;
  margin-bottom: 35px;
  margin-top: 25px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 255px;
  height: 141px;
`;

export const ImageTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 700;
  font-style: italic;
  color: #000;
  margin-bottom: 5px;
`;

export const ImageCaption = styled.p`
  color: #9da0aa;
  font-weight: 400;
  font-style: italic;
  font-size: 1rem;
`;
