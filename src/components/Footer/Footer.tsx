import { FooterContainer, LogoWrapper, Text } from "./Footer.styles";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </LogoWrapper>
      <Text>
        A fictional project made by{" "}
        <a href="https://www.linkedin.com/in/michelleimiller/">
          Michelle Miller
        </a>{" "}
        &amp; <a href="https://www.linkedin.com/in/macaio/">Caio Macedo</a>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
