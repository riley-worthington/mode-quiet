import React from 'react';
import './Splash.css';

const Splash = () => {
  return (
    <div className='splash-content parallax'>
      <div>
        <img src={require("./frame_outline.png")} alt="frame outline" />
      </div>
      <h1>silence calling</h1>
    </div>
  );
}

export default Splash;
