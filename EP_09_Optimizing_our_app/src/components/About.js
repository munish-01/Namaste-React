// import React from "react";
// alternatre way to write react just destructure it
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass.";

// class based component - parent component
class About extends Component {
  // getting some props
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
    // API CALL
    
  }

  render() {
    // console.log("parent render");
    return (
      <div className="About-div">
        <h1>This is about class based Component</h1>
        {/* child component */}
        <UserClass
          name={"munish dhillon"}
          location={"punjab"}
          contact={"12345-67890"}
        />
        {/* <UserClass
          name={"ELON MUSK"}
          location={"punjab"}
          contact={"12345-67890"}
        /> */}
      </div>
    );
  }
}

// functional based component

// const About = () => {
//   return (
//     <div className="About-div">
//       <h1>About</h1>
//       <h2>This is about section of Ghar Khana</h2>
//       {/* <User name={"munish dhillon (functional component)"} /> */}

//       <UserClass
//         name={"munish dhillon (Class component)"}
//         location={"punjab (class)"}
//         contact={"12345-67890"}
//       />
//     </div>
//   );
// };

export default About;
