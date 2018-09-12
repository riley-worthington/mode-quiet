import React from 'react';
import './MainNav.css';

const MainNav = () => {
  return (
    <header>
      <div className="header-branding">
        <img src="//static1.squarespace.com/static/5b2ee66d89c172da99e501aa/t/5b6e6dc08a922ddbba1412ed/1536713092955/?format=1500w" alt="modequiet" className="branding-logo" />
      </div>
      <div className="top-right-links">
        <ul className="nav-ul">
          <li>Home</li>
          <li>Shop</li>
          <li>Specifications</li>
          <li>QuickStart</li>
          <li>Fieldwork</li>
        </ul>
        <div className='cart'>
          <img src={require("./cart_placeholder.png")} alt="cart" />
        </div>
      </div>
    </header>
  );
}

export default MainNav;
