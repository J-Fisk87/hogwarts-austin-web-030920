import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Pigdex from "./Pigdex";

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      greased: null,
      sort: null
    }
  }

  displayCards = () => {
    let sorter = this.state.sort;

    let pigs = this.state.greased ? this.state.hogs.filter(pig => pig.greased === true) : this.state.hogs;
    sorter ? pigs.sort((a, b) => a[sorter] < b[sorter] ? 1 : -1) : null;

    return pigs;
  }

  clickHog = (e) => {
    e.target.parentElement.nextElementSibling.classList.remove('hidden')
  }

  sortHogs = (e) => {
    e.target.value === "null" ? this.setState({ sort: null }) : this.setState({ sort: e.target.value })
  }

  filterHogs = (e) => {
    this.state.greased ? this.setState({greased: null}) : this.setState({greased: 'yes'})
  }

  render() {
    return (
      <div className="App">
        <Nav handleSort={this.sortHogs} handleFilter={this.filterHogs} />
        <Pigdex displayCards={this.displayCards} filters={this.state.filters} handleClick={this.clickHog} />
      </div>
    );
  }
}

export default App;
