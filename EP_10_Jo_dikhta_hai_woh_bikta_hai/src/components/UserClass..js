import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "https://www.dummy.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/munish-01");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-sm mb-4"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-1">
          {name || "Unknown User"}
        </h2>

        <h3 className="text-gray-600 text-md">
          Location: {location || "Unknown"}
        </h3>
      </div>
    );
  }
}

export default UserClass;
