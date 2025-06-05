import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header className="header">
      <button onClick={toggleTheme} className="theme-toggle-button" title="Przełącz motyw">
  {theme === 'dark' ? '☀️' : '🌙'}
</button>

       
  
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
