import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 3em;
  background-color: #0b132b;

  @media (max-width: 768px) {
    padding: 0 1.3em;
    height: 80px;
  }

  img {
    max-width: 85%;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: auto;
  width: auto;
  margin-right: 20px;
`;

export const Logo = styled.img`
  height: 90%;
  width: 90%;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const RoundIcon = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 10px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
