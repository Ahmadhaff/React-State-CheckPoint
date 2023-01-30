import React, { Component } from "react";



export default class Checkpoint extends Component {
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

  componentDidMount() {
    setInterval(() => {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.setState({ mountingTime: this.state.mountingTime + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
         
          <>
            <h1>My Name Is {this.state.Person.fullName}</h1>
            <h1>Am a {this.state.Person.bio}</h1>
            <h1>But am Still {this.state.Person.profession} In GoMyCode</h1>
            <img src={this.state.Person.imgSrc} alt="Developper"></img>
            <h1> mounting-Time = {this.state.mountingTime}</h1>
          </>
        
        
      </div>
    );
  }
}
