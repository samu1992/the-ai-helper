import React from 'react';
import Login from '../Login/Login';

const NavBar = () => {
  return (
    <nav className='container-nav'>
      <ul className='nav-links'>
        <li>Submi</li>
        <li className='text-logo'>The AI Helper</li>
        <li>News</li>
      </ul>
      <Login />
    </nav>
)
}

export default NavBar