import React from 'react';
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
          <img className='searchicon' src={searchIcon} alt="Search Icon" />
          <input className='searchinput' type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="content-domain-ul">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Sign up</div>
        <div className="nav-item">Log in</div>
      </div>
    </div>
  );
}

export default Navbar;
