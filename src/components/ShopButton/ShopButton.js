import React from 'react';
import './ShopButton.css';
import Fade from 'react-reveal/Fade';

const ShopButton = () => {
  return (
    <Fade>
      <div className='button-container'>
        <a className='shop-button' href="">
          Shop Frames
        </a>
      </div>
    </Fade>
  );
}

export default ShopButton;
