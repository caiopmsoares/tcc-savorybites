import styled from 'styled-components'

export const SectionContainer = styled.section`
	padding: 0 40px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const SectionTitle = styled.h2`
	font-family: 'Lora', serif;
	font-weight: 700;
	font-size: 34px;
	line-height: 44px;
	margin-bottom: 5px;
	text-transform: uppercase;
`

export const Divider = styled.hr`
	border: none;
	border-top: 1px solid #ccc;
	width: 100%;
	margin-bottom: 10px;
`

export const SectionDescription = styled.p`
	font-family: 'Lora', serif;
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 136%;
	text-align: justify;
	margin-bottom: 10px;
	color: #54596a;
`

export const ImageGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	margin-top: 50px;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		gap: 10px;
		margin-top: 40px;
	}
`

export const ImageContainer = styled.div`
	width: calc(25% - 20px);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 100px;

	@media (max-width: 768px) {
		width: calc(50% - 10px);
	}
`

export const ImageWrapper = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const ImageTitle = styled.h3`
	font-family: 'Lora', serif;
	font-style: italic;
	font-weight: 700;
	font-size: 1rem;
	line-height: 28px;
	text-transform: uppercase;
	color: #0b132b;
	margin-top: 10px;
	text-align: left;
`

export const ImageDescription = styled.p`
	font-family: 'Lora', serif;
	font-style: italic;
	font-weight: 400;
	font-size: 0.8rem;
	line-height: 136%;
	text-align: justify;
	color: #0b132b;
	margin-bottom: 10px;
`

export const ReadMore = styled.span`
	font-family: 'Lora', serif;
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
		font-family: 'Lora', serif;
		font-style: italic;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		text-align: justify;
		color: #028a35;
	}
`
