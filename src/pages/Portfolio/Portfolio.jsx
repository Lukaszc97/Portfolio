import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="title">Łukasz Cieślik</h1>
      <p className="portfolio-note">
        Strona cały czas się rozwija – wkrótce pojawią się nowe sekcje i materiały.
      </p>
      <div className="portfolio-grid">
        <Link to="/portfolio/biography" className="portfolio-card">
          <h2>O mnie</h2>
          <p>Dowiedz się więcej o moich doświadczeniach, pasjach i projektach</p>
        </Link>
        <Link to="/portfolio/dance-gallery" className="portfolio-card">
          <h2>Galeria Taneczna</h2>
          <p>Zobacz moje zdjęcia i filmy taneczne</p>
        </Link>
        {/* <Link to="/portfolio/coding-Projects" className="portfolio-card">
          <h2>Projekty Kodowania</h2>
          <p>Przeglądaj moje aplikacje i gry</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Portfolio;
