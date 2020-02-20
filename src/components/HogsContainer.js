import React from 'react'
import hogsdata from '../porkers_data';
import { render } from 'react-dom';
import HogTile from './HogTile'

class HogsContainer extends React.Component {

  renderHogs() {
    return hogsdata.map((hogInfo, index) =>
      <HogTile
        key={index}
        hogInfoz={hogInfo}
      />)

  }

  render() {


    return (
      <div className="hog-container">
        {this.renderHogs()}
      </div>
    );

  }


}

export default HogsContainer