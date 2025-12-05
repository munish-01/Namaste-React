// import React from "react";
// alternatre way to write react just destructure it
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass.";

// class based component - parent component
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("parent component did mount");
    // API CALL
  }

  render() {
    return (
      <div className="justify-center">
        <h1>About Team</h1>
        <UserClass
          name={"munish dhillon"}
          location={"punjab"}
          contact={"12345-67890"}
        />
      </div>
    );
  }
}
export default About;