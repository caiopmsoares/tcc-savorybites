import React from "react";

import BlogFeedPt from "../BlogFeed/BlogFeedPt";
import SectionPool from "../SectionPool";
import image1 from "../../images/cheesy.png";
import image2 from "../../images/chocolate.png";
import image3 from "../../images/energy.png";
import image4 from "../../images/carnivore.png";

const BlogSection: React.FC = () => {
  const posts = [
    {
      id: "1",
      content: [
        "Preparem-se para serem levados para uma aventura cheia de sabor em um mundo mágico com pedaços de frango extremamente macios, meus queridos leitores. Essas bolinhas de pura felicidade são nada menos que celestiais, onde a massa crocante abraça calorosamente um suculento recheio de frango. Basta uma mordida para você se ver flutuando em uma nuvem de sabores deliciosos.",
        "Imagine afundar seus dentes em um exterior dourado e perfeitamente frito, revelando um recheio de frango desfiado macio e saboroso que foi temperado com perfeição absoluta. É uma sinfonia deliciosa de texturas e sabores, com a crocância da massa envolvendo graciosamente o centro úmido e suculento do frango. O casamento de sabores é simplesmente divino, pois as notas salgadas do frango se misturam com os toques sutis de especiarias e ervas.",
        "Mas, meus queridos leitores, fiquem avisados - essas coxinhas não são para os fracos de coração. Depois de experimentar a crocância inexplicável e a explosão de frango suculento, toda resistência se torna inútil. É como se essas Coxinhas tivessem criado um feitiço encantador, convidando você a sucumbir à sua atração viciante. Antes que perceba, você se verá ansiando por essas delícias a qualquer hora do dia, não conseguindo resistir ao seu canto de sereia.",
        "O fascínio das Coxinhas vai além de seu sabor, é o seu significado cultural que aumenta seu charme. Originárias no Brasil, essas pequenas maravilhas se tornaram parte integrante de festas, barracas de comida de rua e reuniões familiares. A arte de fazer Coxinhas foi passada de geração em geração, com cada cozinheiro adicionando seu toque único à receita. É uma herança culinária que une as pessoas e traz alegria a seus rostos, conectando-as por meio do amor compartilhado por esse salgadinho irresistível.",
        "Então, meus queridos leitores aficionados por comida, partam nessa grande descoberta gastronômica e não deixem de experimentar essa delícia. Deixe que o exterior crocante e o suculento recheio de frango o transportem para um reino de puro conforto e deleite viciante. Mas tenha em mente que, depois de provar essa delícia celestial, não há como voltar atrás. Preparem-se para uma jornada vitalícia em busca da Coxinha perfeita, entregando-se à sua essência mágica e espalhando a alegria que ela proporciona. Afinal de contas, a vida é muito curta para resistir à tentação dessa extraordinária iguaria brasileira.",
      ],
      imageUrl: "/images/coxinha.png",
      username: "Grace Evans",
      date: "em 21 de Abril",
    },
  ];

  const images = [image1, image2, image3, image4];
  const imageTitles = [
    "PÃO DE QUEIJO",
    "BRIGADEIRO",
    "AÇAÍ DE TIJELA",
    "FEIJOADA",
  ];
  const imageCaptions = ["EM BREVE", "EM BREVE", "EM BREVE", "EM BREVE"];

  return (
    <>
      <BlogFeedPt posts={posts} />
      <SectionPool
        title="RECOMENDADOS"
        images={images}
        imageTitles={imageTitles}
        imageCaptions={imageCaptions}
      />
    </>
  );
};

export default BlogSection;
