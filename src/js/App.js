import React, { Component } from 'react';
import Playlist from './components/playlist';
// import logo from '../img/logo.svg';
import '../scss/main.scss';

class App extends Component {

  render() {
    // let list = new Playlist().init().then(res => {
    //   console.log('playList: ', res);
    //   return res;
    // });

    // console.log('list: ', list);

    return (
      <div className="app">
        <Playlist />
      </div>
    );

  }
}

export default App;
