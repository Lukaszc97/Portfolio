import React from "react";
import BackButton from "../../components/BackButton"; 
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <BackButton />
      <h1 className="contact-title">Skontaktuj się ze mną</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2 className="info-title">Dane kontaktowe</h2>

          <div className="info-item">
            <span className="icon">📧</span>
            <a href="mailto:lukaszc1997@interia.pl" className="info-link">
              lukaszc1997@interia.pl
            </a>
          </div>

          <div className="info-item">
            <span className="icon">📱</span>
            <span className="info-text">+48 796 526 908</span>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <span className="info-text">Tychy, Polska</span>
          </div>

          <div className="social-links">
           {/*  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            {/* <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a> */}
            <a href="https://www.instagram.com/lukas_cieslik?igsh=MXU0ZzJ3ZnVyNnZzdA==" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
