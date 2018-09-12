import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='intro-box'>
      <div className='intro-image-container'>
        <img className='intro-image' src={require("./QuietFrame.jpeg")} alt="quietframe" />
      </div>
      <div className='intro-text'>
        <h2>Meet QuietFrame.</h2>
        <p>QuietFrame™ is a visual reminder to disconnect and reconnect with what’s most important.</p>
        <p>Whether it’s 10 minutes, 10 hours or 10 days, QuietFrame substitutes for a smartphone and other devices to create tech-free space in an otherwise digital day.</p>
        <p>Shift into a different mode. Silence Calling™</p>
      </div>
    </div>
  );
}

export default Introduction;
