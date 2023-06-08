import React from 'react'

import {
	HeaderContainer,
	//Logo,
	LogoWrapper,
	IconsContainer,
	RoundIcon,
} from './Header.styles'
import enIcon from '../../images/english.png'
import ptIcon from '../../images/portuguese.png'
import tsIcon from '../../images/translate.png'

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<div>
				<LogoWrapper>logo aqui</LogoWrapper>
			</div>
			<div>
				<IconsContainer>
					<RoundIcon>
						<a href="#">
							<img src={enIcon} alt="English" />
						</a>
					</RoundIcon>
					<RoundIcon>
						<a href="#">
							<img src={ptIcon} alt="Portuguese" />
						</a>
					</RoundIcon>
					<RoundIcon>
						<a href="#">
							<img src={tsIcon} alt="Translated" />
						</a>
					</RoundIcon>
				</IconsContainer>
			</div>
		</HeaderContainer>
	)
}

export default Header
