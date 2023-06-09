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

const HomeSectionPt: React.FC = () => {
	return (
		<SectionContainer>
			<SectionTitle>MINHAS REVIEWS</SectionTitle>
			<Divider />
			<SectionDescription>
				Embarque em uma viagem de dar água na boca pelo delicioso mundo da
				culinária brasileira lendo minhas últimas reviews
			</SectionDescription>
			<ImageGrid>
				<ImageContainer>
					<ImageWrapper>
						<img src={chickenImage} alt="Chicken" />
						<ImageTitle>COXINHA DE FRANGO</ImageTitle>
						<ImageDescription>
							Bolinhas de massa crocante recheadas com frango suculento.
							Perfeito e reconfortante.
						</ImageDescription>
						<ReadMore>
							<Link to="/sectionportuguese">LEIA MAIS &gt;</Link>
						</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={chocolateImage} alt="Chocolate" />
						<ImageTitle>BRIGADEIRO</ImageTitle>
						<ImageDescription>
							Delícia de leite condensado e cacau enroladas em granulado.
							Perfeição em uma mordida.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={energyImage} alt="Energy" />
						<ImageTitle>AÇAÍ DE TIGELA</ImageTitle>
						<ImageDescription>
							Açaí congelado coberto com granola e mel. Combustível para suas
							aventuras mais mirabolantes.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={carnivoresImage} alt="Carnivores" />
						<ImageTitle>FEIJOADA</ImageTitle>
						<ImageDescription>
							Feijão preto com linguiça, costelinha de porco e carne. O sonho de
							todo carnívoro.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={pieImage} alt="Pie" />
						<ImageTitle>EMPADÃO</ImageTitle>
						<ImageDescription>
							Massa recheada de frango, camarão ou palmito. Reconfortante e
							satisfatório.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={codfishImage} alt="Codfish" />
						<ImageTitle>BOLINHO DE BACALHAU</ImageTitle>
						<ImageDescription>
							Bolinhos crocantes com bacalhau, batatas e ervas. Inspiração
							portuguesa com um toque brasileiro.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={blissImage} alt="Bliss" />
						<ImageTitle>CAIPIRINHA</ImageTitle>
						<ImageDescription>
							Cachaça, limão, açúcar e gelo combinados para um coquetel
							refrescante e picante.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
				<ImageContainer>
					<ImageWrapper>
						<img src={cheesyImage} alt="Cheesy" />
						<ImageTitle>PÃO DE QUEIJO</ImageTitle>
						<ImageDescription>
							Pãezinhos macios repletos de queijo. A combinação perfeita de
							sabor e satisfação.
						</ImageDescription>
						<ReadMore>EM BREVE</ReadMore>
					</ImageWrapper>
				</ImageContainer>
			</ImageGrid>
		</SectionContainer>
	)
}

export default HomeSectionPt
