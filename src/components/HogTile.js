import React from 'react';

class HogTile extends React.Component {

  state = {
    clickedOn: false
  }

  handlePigTile = () => {

    const currentState = this.state.clickedOn
    this.setState({
      clickedOn: !currentState
    })

  }

  render() {
    console.log(this.state.clickedOn, 'CLICK')

    const { hogInfoz: { name, specialty, greased, weight } } = this.props;

    return (
      <div onClick={this.handlePigTile} className="pigTile" >
        <h3>{name}</h3>

        {(this.state.clickedOn) ? <ul><li>specialty: {specialty}</li> <li>greased: {greased}</li> <li>weight: {weight}</li> <li>highest medal achieved: {this.props.hogInfoz['highest medal achieved']}</li></ul> : null}<br />
        {<img src={process.env.PUBLIC_URL + `/hog-imgs/${name.split(' ').join('_')}.jpg`} alt={name} />}
      </div>
    );
  }
}

export default HogTile;
