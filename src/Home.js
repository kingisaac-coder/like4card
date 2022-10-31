import React from "react";
import Cards from "./Cards";
import "./Home.css";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="body__image">
        <img
          src="https://likecard-space.fra1.digitaloceanspaces.com/Sliders/95053-slider1home2_1-english-1-.png"
          alt=""
        />
      </div>
      <div className="grid">
        <Cards
          title="iTunes& apple card"
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 50SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 100SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 200SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 300SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 400SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 500SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 1000SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" 1500SAR"
          button="Buy Now"
        />
        <Cards
          title="iTunes USA"
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" $50"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" $150"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/bccee-20-.png"
          description=" Apple& iTunes"
          Price=" $200"
          button="Buy Now"
        />
        <br />
        <Cards
          title="Xbox"
          image="https://likecard-space.fra1.digitaloceanspaces.com/Sliders/17c04-10-50-usa-xbox-2.png"
          description="Xbox"
          Price=" $50 - $100"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/Sliders/dd9fe-10-50-usa-xbox.png"
          description="Xbox"
          Price=" $239"
          button="Buy Now"
        />

        <Cards
          title="Play Station"
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/d9c22-psn-qat-mon1.png"
          description="Play station"
          Price=" $20SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/d9c22-psn-qat-mon1.png"
          description="Play station"
          Price=" $200SAR"
          button="Buy Now"
        />
        <Cards
          title="PUBG"
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/eb4fd-25-1500-free300uc-.png"
          description="PUBG"
          Price=" $100SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/7a55d-10-600-free60uc-.png"
          description="PUBG"
          Price=" $300SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/7a55d-10-600-free60uc-.png"
          description="PUBG"
          Price=" $ 500SAR"
          button="Buy Now"
        />
        <Cards
          title="Freefire"
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/44db4-210-21-.png"
          description="Freefire"
          Price=" $ 100SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/44db4-210-21-.png"
          description="Freefire"
          Price=" $ 300SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/9a212-530-53-.png"
          description="Freefire"
          Price=" $ 50SAR"
          button="Buy Now"
        />
        <Cards
          image="https://likecard-space.fra1.digitaloceanspaces.com/products/9a212-530-53-.png"
          description="Frefire"
          Price=" $ 300SAR"
          button="Buy Now"
        />
      </div>
    </div>
  );
}

export default Home;
