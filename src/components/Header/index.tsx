import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Header() {
  return(
    <>
        <div className="header">
          <Link to="home" className="logo">Nutri</Link>
          <div className="header-right">
            <Link to="/">Home</Link>
            <Link to="/sobre">Menu</Link>
          </div>
        </div>
    </>
  ) 
}

export default Header;
