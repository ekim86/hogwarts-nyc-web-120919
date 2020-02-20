import React from 'react'
import hogsdata from '../porkers_data';

class HogsContainer extends React.Component{



  render(){
    // console.log('hogs', this.props);

    return(
      <div>
        {hogsdata.map((hog, index) =>
        <div className='pigTile'>
          {hog.name}
          {hog.specialty}
          {hog.greased}
          {hog.weight}
          <img src="../hog-imgs/cherub.jpg"/>
      </div>)}
      </div>
    )

  }
}

export default HogsContainer