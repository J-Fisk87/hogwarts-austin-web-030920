import React, { Fragment } from "react";
import Pig from './Pig.js'

class Pigdex extends React.Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.displayCards().map(pig => <Pig pigDat={pig} handleClick={this.props.handleClick} />)}
      </div>
    );
  }
}


export default Pigdex;



