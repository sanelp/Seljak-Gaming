import React from "react";
import "./AboutUs.css";
import leftImage from "../img/deler.jpg"; 
import rightImage from "../img/deler2.jpg"; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Om Oss</h1>
      <div className="about-content">
        <img src={leftImage} alt="Left" className="about-image left" />
        <div className="about-text">
          <p>
            Velkommen til Seljak Gaming! Vi er en dedikert gruppe av
            spillentusiaster som brenner for å levere den beste
            gaming-opplevelsen til våre kunder. Vårt mål er å tilby høykvalitets
            gaming-PCer og tilbehør som gir deg en uforglemmelig
            spillopplevelse.
          </p>
          <p>
            Hos Seljak Gaming tror vi på kraften i teknologi og hvordan den kan
            forbedre spillopplevelsen. Vi jobber hardt for å sikre at våre
            produkter er av høyeste kvalitet og oppfyller de høyeste
            standardene.
          </p>
          <p>
            Vårt team består av en gjeng som har erfaring med å bygge og
            oppgradere PCer, og vi er alltid klare til å hjelpe deg med å finne
            den perfekte gaming-PCen for dine behov. Vi tilbyr et bredt utvalg
            av produkter, fra kraftige gaming-PCer til tilbehør som tastatur,
            mus og skjermer.
          </p>
        </div>
        <img src={rightImage} alt="Right" className="about-image right" />
      </div>
    </div>
  );
};

export default AboutUs;
