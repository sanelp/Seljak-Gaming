import React, { useEffect } from "react";
import "./Home.css";
// import heroImage from "../img/hero.jpg"; // Removed
import pc1 from "../img/pc1.jpg";
import pc2 from "../img/pc2.jpg";
import pc3 from "../img/pc3.jpg";
import produkt1 from "../img/produkt1.jpg";
import produkt2 from "../img/produkt2.jpg";

const Home = () => {
  useEffect(() => {
    // Subtle floating animation for elements
    const animateElements = () => {
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
      });
    };

    // Component pulse effect on hover
    const addComponentInteractivity = () => {
      const components = document.querySelectorAll('.component');
      components.forEach(component => {
        component.addEventListener('mouseenter', () => {
          component.style.boxShadow = `0 0 30px ${component.style.borderColor || '#64c8ff'}`;
        });
        
        component.addEventListener('mouseleave', () => {
          component.style.boxShadow = '';
        });
      });
    };

    // Staggered component appearance
    const staggerComponents = () => {
      const components = document.querySelectorAll('.pc-components .component');
      components.forEach((component, index) => {
        component.style.opacity = '0';
        component.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
          component.style.transition = 'all 0.6s ease';
          component.style.opacity = '1';
          component.style.transform = 'translateY(0)';
        }, index * 200 + 1000);
      });
    };

    animateElements();
    addComponentInteractivity();
    staggerComponents();

    return () => {
      // Cleanup event listeners
      const components = document.querySelectorAll('.component');
      components.forEach(component => {
        component.removeEventListener('mouseenter', () => {});
        component.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="animated-background">
            <div className="floating-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
              <div className="particle particle-6"></div>
            </div>
            <div className="gradient-orbs">
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
            </div>
            <div className="subtle-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
            <div className="pc-components">
              <div className="component cpu-component floating-element">
                <span className="component-label">CPU</span>
                <span className="component-spec">i9-13900K</span>
              </div>
              <div className="component gpu-component floating-element">
                <span className="component-label">GPU</span>
                <span className="component-spec">RTX 4090</span>
              </div>
              <div className="component ram-component floating-element">
                <span className="component-label">RAM</span>
                <span className="component-spec">32GB DDR5</span>
              </div>
              <div className="component ssd-component floating-element">
                <span className="component-label">SSD</span>
                <span className="component-spec">2TB NVMe</span>
              </div>
              <div className="component motherboard-component floating-element">
                <span className="component-label">MB</span>
                <span className="component-spec">Z790</span>
              </div>
              <div className="component psu-component floating-element">
                <span className="component-label">PSU</span>
                <span className="component-spec">850W 80+</span>
              </div>
            </div>
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title floating-element">
              Din drømme PC <span className="text-gradient">venter!</span>
            </h1>
            <p className="hero-description floating-element">
              Bygg, kjøp og tilpass PCene for gaming, jobb og mer. 
              Opplev kraftfull ytelse og uslåelig kvalitet.
            </p>
            <div className="hero-buttons floating-element">
              <a href="/products" className="hero-button primary">
                <span>Kjøp nå</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/about" className="hero-button secondary">
                Lær mer
              </a>
            </div>
          </div>
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
