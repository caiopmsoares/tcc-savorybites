import styled from 'styled-components'

export const HeaderContainer = styled.header`
	height: 105px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 100px;
	background-color: #0b132b;
	border-bottom: 1px solid #faf7ee;
`

export const LogoWrapper = styled.div`
	height: auto;
	width: auto;
	margin-right: 20px;
`

export const Logo = styled.img`
	height: 90%;
	width: 90%;
`

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

export const RoundIcon = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`
