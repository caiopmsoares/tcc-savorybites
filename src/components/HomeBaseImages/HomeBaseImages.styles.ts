import styled from "styled-components";

export const TarjaContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0;
  background-color: #f0f0f0;
  white-space: nowrap;
  @media (max-width: 768px) {
    height: 150px;
    overflow-y: hidden;
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  width: auto;
  height: auto;
  object-fit: contain;
`;
