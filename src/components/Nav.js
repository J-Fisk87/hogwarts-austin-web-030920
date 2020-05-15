import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  render() {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
        <h3>Sort by:</h3>
        <select name='sort' id='sortDropdown' onChange={this.props.handleSort}>
          <option value="null">N/A</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <p></p>
      <div>
        <h3>Greased?</h3>
      <input type='checkbox' value="greased" onChange={this.props.handleFilter} />
      </div>
    </div>
  )};
};

export default Nav;
