import React from 'react';
import Legal from '../Legal/Legal';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <footer>
      <nav className='bottom-nav'>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">FAQ</a>
        <a href="">Register</a>
      </nav>
      <Legal />
    </footer>
  );
}

export default BottomNav;
