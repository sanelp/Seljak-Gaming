import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-left">
            <h3>Seljak Gaming</h3>
            <p>
              &copy; {new Date().getFullYear()} Sanel & Co. All rights reserved.
            </p>
          </div>
        </div>

        <div className="social-icons">
          <a href="#" className="icon facebook"></a>
          <a href="#" className="icon youtube"></a>
          <a href="#" className="icon instagram"></a>
        </div>

        <div className="footer-right">
          <h4>Kontakt Oss</h4>
          <p>Email: sani.pitnjakovic@gmail.com</p>
          <p>Telefon: +47 93 97 18 40</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
