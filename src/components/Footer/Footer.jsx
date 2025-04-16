import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
        <p>&copy; {new Date().getFullYear()} Moje Portfolio. Wszelkie prawa zastrzeżone.</p>
      
    </footer>
  );
};

export default Footer;