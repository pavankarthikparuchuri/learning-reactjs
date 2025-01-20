import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "India",
        pic: "https:/dummyurl.com",
      },
    };
    console.log("component constructor");
  }
  async componentDidMount() {
    // console.log("Child Component Did Mount", this.props);
    const res = await fetch(
      "https://api.github.com/users/pavankarthikparuchuri"
    );
    const json = await res.json();
    console.log(json, "::json");
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        name: json.login,
        pic: json.avatar_url,
      },
    });
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("component render");
    const {
      state: {
        userInfo: { name, location, pic },
      },
    } = this;
    return (
      <div className="user-card">
        <img src={pic} />
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
