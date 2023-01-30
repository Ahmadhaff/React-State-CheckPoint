import "./App.css";
import Checkpoint from "./Checkpoint";

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Haffoudhi Ahmad",
        bio: "FullStack Developper",
        imgSrc:
          "https://www.namasteui.com/wp-content/uploads/2019/07/Full-Stack-Developer.jpg",
        profession: "Student",
      },
      shows: true,
      mountingTime: 0,
    };
  }
  change = () => {
    this.setState({ shows: !this.state.shows });
  }
  render() {
    return (
      <div className="App">
        {this.state.shows ? <Checkpoint></Checkpoint> :
        null}
       <button onClick={this.change}>Show</button> 
      </div>
    )
  }
}
