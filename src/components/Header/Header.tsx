import React from "react";

import {
  HeaderContainer,
  LogoWrapper,
  IconsContainer,
  RoundIcon,
} from "./Header.styles";
import enIcon from "../../images/english.png";
import ptIcon from "../../images/portuguese.png";
import tsIcon from "../../images/translate.png";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </LogoWrapper>
      </div>
      <div>
        <IconsContainer>
          <RoundIcon>
            <Link to="/">
              <img src={enIcon} alt="English" />
            </Link>
          </RoundIcon>
          <RoundIcon>
            <Link to="/homeportuguese">
              <img src={ptIcon} alt="Portuguese" />
            </Link>
          </RoundIcon>
          <RoundIcon>
            <Link to="/hometranslated">
              <img src={tsIcon} alt="Translated" />
            </Link>
          </RoundIcon>
        </IconsContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
