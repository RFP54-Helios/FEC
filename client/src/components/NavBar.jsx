import React from 'react';
import logo from '../assets/logo.svg'

let NavBar = () => (
  <div className='nav-bar'>
    <img className='nav-logo' src={logo} alt='helios logo'></img>
    <header><h2 className='nav-title'>Helios</h2></header>
  </div>
);

export default NavBar;
