import React from 'react';
import './Announcement.css';

const Announcement = () => {
  return (
    <div className='announcement-row'>
      <div className='announcement-box'>
        <p>
          Visit us at the SXSW <a href='https://www.sxsw.com/exhibitions/sxsw-wellness-expo/'>Wellness Expo</a>
        </p>
        <p>
          March 9-10, 2019
        </p>
        <img id='sxsw' src={require('./sxsw.png')} alt='south by southwest logo'/>
      </div>
    </div>
  );
}

export default Announcement;
