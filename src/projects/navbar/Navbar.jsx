import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import searchIcon from '../../assets/search-img.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-domain-ul">
        <div className="logo">logo</div>
        <div className="brand-name">Syam</div>
      </div>
      <div className="search-domain">
        <div className="search-input-container">
          <img className="searchicon" src={searchIcon} alt="Search Icon" />
          <input className="searchinput" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="content-domain-ul">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/signup" className="nav-item">Sign up</Link>
        <Link to="/login" className="nav-item">Log in</Link>
      </div>
    </div>
  );
}

export default Navbar;
