import React from 'react'
import {
	HomeHeroContainer,
	BackgroundImage,
	Overlay,
	ContentWrapper,
	ImageContainer,
	Image,
	TextContainer,
	Title,
	Description,
	SmallImage,
} from './HomeHero.styles'

const HomeHero: React.FC = () => {
	return (
		<HomeHeroContainer>
			<BackgroundImage />
			<Overlay>
				<ContentWrapper>
					<ImageContainer>
						<Image />
					</ImageContainer>
					<TextContainer>
						<Title>OLÁ, EU SOU A GRAÇA</Title>
						<Description>
							Entusiasta da gastronomia do Reino Unido com uma grande paixão
							pela culinária brasileira. Junte-se a mim em meu blog enquanto
							exploro, saboreio e analiso com paixão o mundo de dar água na boca
							da culinária brasileira. Prepare-se para saborear essa delícia!
						</Description>
					</TextContainer>
					<SmallImage />
				</ContentWrapper>
			</Overlay>
		</HomeHeroContainer>
	)
}

export default HomeHero
