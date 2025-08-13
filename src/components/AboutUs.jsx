import React from "react";
import "./AboutUs.css";
import leftImage from "../img/deler.jpg"; 
import rightImage from "../img/deler2.jpg"; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-hero">
          <h1 className="about-title">Om Seljak Gaming</h1>
          <p className="about-subtitle">Din partner innen gaming excellence</p>
        </div>

        <div className="about-main">
          <div className="about-images">
            <div className="image-container left-image">
              <img src={leftImage} alt="Gaming komponenter" />
              <div className="image-overlay">
                <span>Premium Komponenter</span>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <div className="text-section">
              <div className="section-icon">🎮</div>
              <h3>Vår Visjon</h3>
              <p>
                Velkommen til Seljak Gaming! Vi er en dedikert gruppe av
                spillentusiaster som brenner for å levere den beste
                gaming-opplevelsen til våre kunder. Vårt mål er å tilby høykvalitets
                gaming-PCer og tilbehør som gir deg en uforglemmelig
                spillopplevelse.
              </p>
            </div>

            <div className="text-section">
              <div className="section-icon">⚡</div>
              <h3>Vår Teknologi</h3>
              <p>
                Hos Seljak Gaming tror vi på kraften i teknologi og hvordan den kan
                forbedre spillopplevelsen. Vi jobber hardt for å sikre at våre
                produkter er av høyeste kvalitet og oppfyller de høyeste
                standardene.
              </p>
            </div>

            <div className="text-section">
              <div className="section-icon">🏆</div>
              <h3>Vårt Team</h3>
              <p>
                Vårt team består av erfarne spesialister som har dyp kunnskap om å
                bygge og oppgradere PCer. Vi er alltid klare til å hjelpe deg med å
                finne den perfekte gaming-PCen for dine behov, fra kraftige
                gaming-rigger til essensielt tilbehør.
              </p>
            </div>
          </div>

          <div className="about-images">
            <div className="image-container right-image">
              <img src={rightImage} alt="Gaming setup" />
              <div className="image-overlay">
                <span>Elite Gaming Setup</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Fornøyde Kunder</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">PC Bygget</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">År Erfaring</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
