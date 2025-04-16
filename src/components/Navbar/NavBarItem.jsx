import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
const NavBarItem = ({ to, text, subItems }) => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <li className="navbar-item"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() =>setIsOpen(false)}
    >
    
      <Link to={to} className="navbar-link">
      {text}
      </Link>
      {subItems && isOpen && (
        <ul className='submenu'>
          {subItems.map((subItems,index)=>(
            <li key={index}>
            <Link to={subItems.to} className="submenu-link">{subItems.text}</Link>
            </li>
          ))}
        </ul>
      )}
     
    </li>
  );
};

export default NavBarItem;