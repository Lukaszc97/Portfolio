import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Witaj w moim portfolio!</h1>
      <p>Tutaj znajdziesz moje projekty taneczne i programistyczne.</p>
      <div className="cta">
        <a href="/portfolio" className="cta-button">Zobacz moje portfolio</a>
      </div>
    </div>
  );
};

export default Home;