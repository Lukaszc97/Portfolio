import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Witaj w moim portfolio!</h1>
      <p>Tutaj znajdziesz moje projekty taneczne {/* i programistyczne */}.</p>
      <div className="cta">
      <Link to="/portfolio" className="cta-button">Zobacz moje portfolio</Link>

      </div>
    </div>
  );
};

export default Home;
