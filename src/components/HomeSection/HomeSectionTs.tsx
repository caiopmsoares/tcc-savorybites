import React from 'react'
import {
	SectionContainer,
	SectionTitle,
	Divider,
	SectionDescription,
	ImageGrid,
	ImageContainer,
	ImageWrapper,
	ImageTitle,
	ImageDescription,
	ReadMore,
} from './HomeSection.styles'

import { Link } from 'react-router-dom'

import chickenImage from '../../images/chicken.png'
import chocolateImage from '../../images/chocolate.png'
import energyImage from '../../images/energy.png'
import carnivoresImage from '../../images/carnivore.png'
import pieImage from '../../images/pie.png'
import codfishImage from '../../images/codfish.png'
import blissImage from '../../images/bliss.png'
import cheesyImage from '../../images/cheesy.png'

const HomeSectionTs: React.FC = () => {
	return (
		<SectionContainer>
			<SectionTitle>MINHAS AVALIAÇÕES</SectionTitle>
			<Divider />
			<SectionDescription>
				Embarque em uma viagem de dar água na boca pelo delicioso reino da
				culinária brasileira com minhas últimas avaliações
			</SectionDescription>
			<ImageGrid>
				<ImageContainer>
					<ImageWrapper>
						<img src={chickenImage} alt="Chicken" />
						<ImageTitle>Picadas de nuvem de frango</ImageTitle>
						<ImageDescription>
							Bolinhas de massa crocante recheadas com frango suculento. Lanche
							perfeitamente reconfortante e satisfatório.
						</ImageDescription>
						<ReadMore>
							<Link to="/sectiontranslated">LEIA MAIS &gt;</Link>
						</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={chocolateImage} alt="Chocolate" />
						<ImageTitle>trufas de chocolate</ImageTitle>
						<ImageDescription>
							Delícias de leite condensado e cacau enroladas em granulado.
							Perfeição em forma de mordida.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={energyImage} alt="Energy" />
						<ImageTitle>aumento de energia</ImageTitle>
						<ImageDescription>
							Açaí congelado coberto com granola e mel. Combustível para suas
							aventuras de super-heróis.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={carnivoresImage} alt="Carnivores" />
						<ImageTitle>delícia de carnívoro</ImageTitle>
						<ImageDescription>
							Feijão preto com salsichas, costelinha de porco e vaca. O sonho de
							um carnívoro tornado realidade.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={pieImage} alt="Pie" />
						<ImageTitle>perfeição de torta</ImageTitle>
						<ImageDescription>
							Uma mistura de recheio de frango, camarão ou palmito.
							Reconfortante e satisfatório.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={codfishImage} alt="Codfish" />
						<ImageTitle>Delícias de Bacalhau</ImageTitle>
						<ImageDescription>
							Bolinhos crocantes com bacalhau salgado, batatas e ervas.
							Inspiração portuguesa com toque brasileiro.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={blissImage} alt="Bliss" />
						<ImageTitle>felicidade brasileira</ImageTitle>
						<ImageDescription>
							Cachaça, limão, açúcar e gelo se combinam para um coquetel
							refrescante e picante.
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={cheesyImage} alt="Cheesy" />
						<ImageTitle>Mordidas de queijo</ImageTitle>
						<ImageDescription>
							Pãezinhos macios e mastigáveis repletos de delícias de queijo. A
							mistura perfeita de salgados e indulgência
						</ImageDescription>
						<ReadMore>LEIA EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
			</ImageGrid>
		</SectionContainer>
	)
}

export default HomeSectionTs
