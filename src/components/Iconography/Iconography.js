import React from 'react';
import Icon from '../Icon/Icon';
import './Iconography.css'

const icon1 = require('../Iconography/set_down_phone.png');
const icon2 = require('../Iconography/pick_up_frame.png');
const icon3 = require('../Iconography/find_your_quiet.png');

const title1 = 'set phone down';
const title2 = 'pick up frame';
const title3 = 'find your quiet';

const text1 = 'Place your smartphone somewhere safe.';
const text2 = 'Familiarize yourself with the weight and feel of the frame. Relax knowing that it will not ping or ring.';
const text3 = 'Reconnect with yourself, others, and the world around you.';

const Iconography = () => {
  return (
    <div className='iconography-container'>
      <Icon image={icon1} title={title1} text={text1}/>
      <Icon image={icon2} title={title2} text={text2}/>
      <Icon image={icon3} title={title3} text={text3}/>
    </div>
  );
}

export default Iconography;
