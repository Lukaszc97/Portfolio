import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton"; 
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Formularz został wysłany!');
  };

  return (
    <div className="contact">
      <BackButton/>
      <h1 className="contact-title">Skontaktuj się ze mną</h1>
      

      <div className="contact-container">
        {/* Sekcja informacji kontaktowych */}
        <div className="contact-info">
          <h2 className="info-title">Dane kontaktowe</h2>
          
          <div className="info-item">
            <span className="icon">📧</span>
            <a href="mailto:przyklad@email.com" className="info-link">lukaszc1997@interia.pl</a>
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
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>

        {/* Sekcja formularza */}
        <div className="contact-form">
          <h2 className="form-title">Wyślij wiadomość</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Wprowadź swoje imię i nazwisko"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Wprowadź swój email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Temat</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="O czym chcesz porozmawiać?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="Twoja wiadomość..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;