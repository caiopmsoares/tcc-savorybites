import styled from 'styled-components'
//import { ReactComponent as LogoSvg } from "../../images/logo.svg";

export const FooterContainer = styled.footer`
	height: 70px;
	background-color: #0b132b;
	display: flex;
	align-items: center;
	padding: 0 100px;
	justify-content: space-between;

	@media (max-width: 768px) {
		justify-content: flex-start;
	}
`

export const LogoWrapper = styled.div`
	width: 15%;
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`

//export const Logo = styled(LogoSvg)`
//height: auto;
//width: 100%;
//`;

export const Text = styled.p`
	font-weight: 400;
	opacity: 0.6;
	color: #faf7ee;
	text-transform: uppercase;

	a {
		text-decoration: none;
		text-transform: uppercase;
		color: #faf7ee;
		opacity: 0.7;
	}
`
