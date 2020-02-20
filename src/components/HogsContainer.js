// import React from 'react'
// import hogsdata from '../porkers_data';

// class HogsContainer extends React.Component{



//   render(){
//     // console.log('hogs', this.props);

//     return(
//       <div>
//         {hogsdata.map((hog, index) =>
//         <div className='pigTile'>
//           {hog.index}
//           {hog.name}
//           {hog.specialty}
//           {hog.greased}
//           {hog.weight}
//           <img src="../hog-imgs/cherub.jpg"/>
//       </div>)}
//       </div>
//     )

//   }
// }

// export default HogsContainer

import React from 'react'
import hogsdata from '../porkers_data';
import { render } from 'react-dom';
import HogTile from './HogTile'

class HogsContainer extends React.Component {

  // state = {
  //   clickedOn: false
  // }

  // handlePigTile = () => {

  //   let currentState = this.state.clickedOn
  //   this.setState({
  //     clickedOn: !currentState
  //   })

  // }

  render() {
    // console.log(this.state.clickedOn, 'CLICK')
    let hogTileInfo = hogsdata.map((hogInfo, index) =>
      <HogTile
        key={index}
        hogInfoz={hogInfo}
        // clickedTest={this.state.clickedOn}
        // {...hogInfo}
      />)


    return (
      <div className="hog-container">
        {hogTileInfo}
      </div>
    );

  }


}

export default HogsContainer