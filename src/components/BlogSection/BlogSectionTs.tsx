import React from 'react'

import BlogFeedTs from '../BlogFeed/BlogFeedTs'
import SectionPool from '../SectionPool'
import image1 from '../../images/cheesy.png'
import image2 from '../../images/chocolate.png'
import image3 from '../../images/energy.png'
import image4 from '../../images/carnivore.png'

const BlogSection: React.FC = () => {
	const posts = [
		{
			id: '1',
			content: [
				'Prepare-se para ser levado em uma aventura cheia de sabor para a terra dos sonhos de aves fofas, meus queridos amigos. Essas bolinhas de pura felicidade são nada menos que celestiais, onde a massa crocante dá um abraço caloroso a um suculento recheio de frango. Apenas uma mordida e você se sentirá flutuando em uma nuvem de delícias saborosas.',
				'Imagine afundar seus chompers em um exterior dourado perfeitamente frito, revelando um recheio de frango macio e saboroso que foi temperado com perfeição absoluta. É uma deliciosa sinfonia de texturas e sabores, com a crocância da massa graciosamente cedendo ao centro úmido e suculento do frango. O casamento de sabores é simplesmente divino, pois as notas salgadas do frango dançam com as notas sutis de especiarias e ervas.',
				'Mas, meus queridos amigos, fiquem avisados - essas Coxinhas não são para os fracos de coração. Depois de experimentar a crocância reconfortante e a explosão do frango suculento, toda resistência se torna inútil. É como se essas Coxinhas tivessem tecido um feitiço encantador, convidando você a sucumbir ao seu fascínio viciante. Antes que você perceba, você se sentirá ansioso por essas guloseimas deliciosas a qualquer hora do dia, impotente contra seu canto de sereia irresistível.',
				'O fascínio das Coxinhas vai além do paladar, meus amigos; é seu significado cultural que aumenta seu charme. Originárias do Brasil, essas pequenas maravilhas se tornaram parte integrante de festas, barracas de comida de rua e reuniões familiares queridas. A arte de fazer Coxinhas é passada de geração em geração, cada cozinheiro acrescentando seu toque único à receita. É uma herança culinária que une as pessoas e traz alegria aos seus rostos, conectando-as através do amor compartilhado por essas irresistíveis mordidas de nuvem de frango.',
				'Assim, meus amigos aficionados da gastronomia, partam nesta grande aventura gastronómica e procurem as Coxinhas que os esperam. Deixe seu exterior crocante e recheio de frango suculento transportá-lo para um reino de puro conforto e deleite viciante. Mas lembre-se, uma vez que você provou sua bondade celestial, não há como voltar atrás, meus amigos. Prepare-se para uma jornada ao longo da vida em busca da Coxinha perfeita, entregando-se à sua essência mágica e espalhando a alegria que ela traz. Afinal, a vida é muito curta para resistir à tentação irresistível dessas extraordinárias delícias brasileiras.',
			],
			imageUrl: '/images/coxinha.png',
			username: 'Grace Evans',
			date: 'em 21 de abril',
		},
	]

	const images = [image1, image2, image3, image4]
	const imageTitles = [
		'FELICIDADE CAFONA',
		'TRUFAS DE CHOCOLATE',
		'AUMENTO DE ENERGIA',
		'DELÍCIA DE CARNÍVORO',
	]
	const imageCaptions = [
		'LEIA EM BREVE',
		'LEIA EM BREVE',
		'LEIA EM BREVE',
		'LEIA EM BREVE',
	]

	return (
		<>
			<BlogFeedTs posts={posts} />
			<SectionPool
				title="RECOMENDADA"
				images={images}
				imageTitles={imageTitles}
				imageCaptions={imageCaptions}
			/>
		</>
	)
}

export default BlogSection
