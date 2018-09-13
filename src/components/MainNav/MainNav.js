import React from 'react';
import './MainNav.css';

const MainNav = () => {
  return (
    <header>
      <div className="header-branding">
        <a href="">
          <img src="//static1.squarespace.com/static/5b2ee66d89c172da99e501aa/t/5b6e6dc08a922ddbba1412ed/1536713092955/?format=1500w" alt="modequiet" className="branding-logo" />
        </a>
      </div>
      <div className="top-right-links">
        <nav className="nav-bar">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Specifications</a>
          <a href="">QuickStart</a>
          <a href="">Fieldwork</a>
        </nav>
        <div className='cart'>
          <a href="">
            <img src={require("./cart_placeholder.png")} alt="cart" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default MainNav;
