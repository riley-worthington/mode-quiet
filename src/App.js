import React, { Component } from 'react';
import MainNav from './components/MainNav/MainNav';
import Splash from './components/Splash/Splash';
import Introduction from './components/Introduction/Introduction';
import Iconography from './components/Iconography/Iconography';
import ShopButton from './components/ShopButton/ShopButton';
import Collage from './components/Collage/Collage';
import './App.css';
import Fade from 'react-reveal/Fade';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Splash />
        <Fade>
          <Introduction />
        </Fade>
        <Fade>
          <Iconography />
        </Fade>
        <Collage />
        <div className='button-section'>
          <ShopButton />
        </div>
        {/* <Announcement />
        <BottomNav />
        <Legal /> */}
      </div>
    );
  }
}

export default App;
