import React, { Component } from 'react';
import MainNav from './components/MainNav/MainNav';
import Splash from './components/Splash/Splash';
import Introduction from './components/Introduction/Introduction';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Splash />
        <Introduction />
        {/* <Iconography />
        <Collage />
        <ShopButton />
        <Announcement />
        <BottomNav />
        <Legal /> */}
      </div>
    );
  }
}

export default App;
