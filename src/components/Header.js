/* eslint-disable */

import React from 'react';

function Header() {
  return (
    <div className='nav-bar'>
      <p className='nav-header'>Math Magicians</p>
      <ul className='nav-items'>
        <a href='/'><li>Home</li></a>
        <a href='/calculator'><li>Calculator</li></a>
        <a href='/quote'><li>Quote</li></a>
      </ul>
    </div>
  )
}

export default Header;