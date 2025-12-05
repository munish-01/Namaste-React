// import React from "react";
// alternatre way to write react just destructure it
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass.";
import UserContext from "../utils/UserContext";

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
      <div>
          {/* LoggedIn User Detail */}
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
      </div>
        <h1 className="text-center text-3xl">About Team</h1>
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