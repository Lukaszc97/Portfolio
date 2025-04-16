import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <Link to="/">MojePortfolio</Link>
          </div>
          <NavBar />
        </div>
      </header>

      <div className="main-content">
        {/* Wszystkie pozostałe elementy strony, które nie powinny nachodzić na nagłówek */}
      </div>
    </>
  );
};

export default Header;
