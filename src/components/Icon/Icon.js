import React from 'react';
import './Icon.css';

const Icon = (props) => {
  const image = props.image;
  const title = props.title;
  const text = props.text;

  return (
    <div className='container'>
      <div>
        <img className='icon' src={image} alt='icon' />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Icon;
