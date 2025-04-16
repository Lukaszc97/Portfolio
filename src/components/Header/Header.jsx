import React from 'react';
import Nav from '../Navbar/Navbar';
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
          <Nav />
        </div>
      </header>

      <div className="main-content">
        {/* Wszystkie pozostałe elementy strony, które nie powinny nachodzić na nagłówek */}
      </div>
    </>
  );
};

export default Header;
