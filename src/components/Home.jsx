import React from "react";
import "./Home.css";
import heroImage from "../img/hero.jpg";
import pc1 from "../img/pc1.jpg";
import pc2 from "../img/pc2.jpg";
import pc3 from "../img/pc3.jpg";
import produkt1 from "../img/produkt1.jpg";
import produkt2 from "../img/produkt2.jpg";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
        <div className="hero-text">
          <h1>Din drømme PC venter!</h1>
          <p className="babyhero">
            Bygg, Kjøp, og tilpass PCene for Gaming, Jobb, og Mer.
          </p>
          <a href="/products" className="hero-button">
            Kjøp nå
          </a>
        </div>
      </section>

      <section className="features">
        <h2>Hvorfor Velge Oss</h2>
        <div className="feature-list">
          <div className="feature-item">
            <img src={pc1} alt="High Performance PCs" />
            <h3>Høy ytelse</h3>
            <p>PC-ene våre er designet for maksimal ytelse og pålitelighet.</p>
          </div>
          <div className="feature-item">
            <img src={pc2} alt="Custom Builds" />
            <h3>Custom Builds</h3>
            <p>Tilpass PC-en til dine eksakte spesifikasjoner.</p>
          </div>
          <div className="feature-item">
            <img src={pc3} alt="Affordable Prices" />
            <h3>Rimelige priser</h3>
            <p>Få de beste tilbudene på maskinvare av topp kvalitet.</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Utvalgte produkter</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={produkt1} alt="Gaming PC" />
            <h3>Charmander Limited Edition PC</h3>
            <p>Eksklusiv spill-PC for ultimat ytelse.</p>
          </div>
          <div className="product-item">
            <img src={produkt2} alt="Workstation PC" />
            <h3>Red Beast Gaming PC</h3>
            <p>Kraftig Arbeidsstasjon</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
