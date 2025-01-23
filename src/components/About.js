import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <User name={"Paruchuri Pavankarthik"} />
//       <UserClass
//         name={"Paruchuri Pavankarthik"}
//         location={"Bengaluru,Karnataka"}
//         contact={"pavankarthikparichuri2001@gmail.com"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          loggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Paruchuri Pavankarthik"} />
        <UserClass
          name={"Paruchuri Pavankarthik1"}
          location={"Bengaluru,Karnataka1"}
          contact={"pavankarthikparichuri2001@gmail.com1"}
        />
      </div>
    );
  }
}
export default About;
