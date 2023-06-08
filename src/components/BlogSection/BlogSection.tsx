import React from "react";

import BlogFeed from "../BlogFeed";
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
        "Get ready to be whisked away on a flavour-filled adventure to the land of fluffy poultry dreams, my dear chums. These little balls of pure bliss are nothing short of heavenly, where crispy dough gives a warm embrace to a succulent chicken filling. Just one bite and you'll find yourself floating on a cloud of savoury deliciousness.",
        "Picture sinking your chompers into a perfectly fried, golden exterior, unveiling a tender, flavourful chicken filling that has been seasoned to absolute perfection. It's a delightful symphony of textures and tastes, with the crispness of the dough gracefully yielding to the moist and juicy chicken centre. The marriage of flavours is simply divine, as the savoury notes of the chicken dance with the subtle hints of spices and herbs.",
        "But, my dear mates, be warned - these Coxinhas are not for the faint-hearted. Once you've experienced their comforting crunch and the burst of juicy chicken, all resistance becomes futile. It's as if these Coxinhas have woven an enchanting spell, beckoning you to succumb to their addictive allure. Before you know it, you'll find yourself yearning for these delightful treats at all hours of the day, powerless against their irresistible siren call.",
        "The allure of Coxinhas extends beyond their taste, my chums; it's their cultural significance that adds to their charm. Originating in Brazil, these little wonders have become an integral part of parties, street food stalls, and cherished family gatherings. The art of crafting Coxinhas has been passed down through generations, with each cook adding their unique touch to the recipe. It's a culinary heritage that unites people and brings joy to their faces, connecting them through their shared love for these irresistible chicken cloud bites.",
        "So, my fellow food aficionados, set forth on this grand gastronomic quest and seek out the Coxinhas that await you. Let their crispy exterior and succulent chicken filling transport you to a realm of pure comfort and addictive delight. But do bear in mind, once you've tasted their heavenly goodness, there's no turning back, my friends. Brace yourselves for a lifelong journey of seeking the perfect Coxinha, indulging in their magical essence, and spreading the joy they bring. After all, life is far too short to resist the irresistible temptation of these extraordinary Brazilian treats.",
      ],
      imageUrl: "/images/coxinha.png",
      username: "Grace Evans",
      date: "on April 21",
    },
  ];

  const images = [image1, image2, image3, image4];
  const imageTitles = [
    "CHEESY BLISS",
    "CHOCOLATE TRUFFLES",
    "ENERGY BOOST",
    "CARNIVORE`S DELIGHT",
  ];
  const imageCaptions = ["READ SOON", "READ SOON", "READ SOON", "READ SOON"];

  return (
    <>
      <BlogFeed posts={posts} />
      <SectionPool
        title="RECOMMENDED"
        images={images}
        imageTitles={imageTitles}
        imageCaptions={imageCaptions}
      />
    </>
  );
};

export default BlogSection;
