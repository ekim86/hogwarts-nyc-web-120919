import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'
import hogsdata from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer hogsdata={hogsdata}/>

      </div>
    )
  }
}

export default App;
