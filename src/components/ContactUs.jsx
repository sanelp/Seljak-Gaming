import React, { useState } from "react";
// import emailjs from "emailjs-com"; // Temporarily commented out - package needs to be installed
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporarily disabled - emailjs package needs to be installed
    alert("Kontaktfunksjon er midlertidig deaktivert. emailjs-pakke må installeres.");
    
    /* Original emailjs code - commented out until package is installed
    const serviceID = "service_seljak";
    const templateID = "template_seljak";
    const userID = "y4Vo7n0i7wQb9Z5gR";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Meldingen din har blitt sendt!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Det oppstod en feil. Vennligst prøv igjen.");
      });
    */
  };

  return (
    <div className="contact-us">
      <div className="contact-background">
        <div className="contact-particles">
          <div className="contact-particle particle-1"></div>
          <div className="contact-particle particle-2"></div>
          <div className="contact-particle particle-3"></div>
          <div className="contact-particle particle-4"></div>
        </div>
        <div className="contact-gradient-orb"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Kontakt Oss</h1>
          <p className="contact-subtitle">
            Har du spørsmål eller trenger hjelp? Vi er her for å hjelpe deg 
            med å finne den perfekte gaming-løsningen.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>Kom i kontakt</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>E-post</h4>
                  <p>sani.pitnjakovic@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Telefon</h4>
                  <p>+47 93 97 18 40</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Adresse</h4>
                  <p>Oslo, Norge</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">⏰</div>
                <div className="contact-details">
                  <h4>Åpningstider</h4>
                  <p>Man-Fre: 09:00-17:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send oss en melding</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Navn</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ditt fulle navn"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-post</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@epost.no"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Melding</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv din melding her..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <span>Send Melding</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
