import React from 'react';
import './Collage.css';
import Fade from 'react-reveal/Fade';

const Collage = () => {
  return (
    <div className='collage-container'>
      <div className='column'>
        <Fade>
          <div className='long-image-box'>
            <img className='collage-image' src={require("./img1.jpg")} alt="sunset" />
          </div>
          <div className='short-image-box'>
            <img id='book2' className='collage-image' src={require("./img6.png")} alt="book and succulent" />
          </div>
        </Fade>
      </div>
      <div className='column'>
        <Fade>
          <div className='short-image-box'>
            <img id='beach' className='collage-image' src={require("./img2.jpg")} alt="beach" />
          </div>
          <div className='long-image-box'>
            <img id='pocket' className='collage-image' src={require("./img4.jpg")} alt="frame in back pocket" />
          </div>
        </Fade>
      </div>
      <div className='column'>
        <Fade>
          <div className='long-image-box'>
            <img id='book1' className='collage-image' src={require("./img3.png")} alt="book and succulent" />
          </div>
          <div className='short-image-box'>
            <img id='sunset' className='collage-image' src={require("./img5.png")} alt="capturing the sunset" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Collage;
