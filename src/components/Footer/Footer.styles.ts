import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0b132b;
  display: flex;
  align-items: center;
  padding: 1em 3em;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 2em;
    height: 70px;
  }
`;

export const LogoWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 15%;
    display: none;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 400;
  opacity: 0.6;
  color: #faf7ee;
  text-transform: uppercase;

  a {
    text-decoration: underline;
    text-transform: uppercase;
    color: #faf7ee;
    opacity: 0.7;
  }
`;
