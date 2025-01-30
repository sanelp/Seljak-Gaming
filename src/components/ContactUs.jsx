import React, { useState } from "react";
import emailjs from "emailjs-com";
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
  };

  return (
    <div className="contact-us">
      <h1>Kontakt Oss</h1>
      <div className="contact-info">
        <p>
          Hvis du har spørsmål eller trenger hjelp, ikke nøl med å kontakte oss.
          Vi er her for å hjelpe deg!
        </p>
       
       </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Melding:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
