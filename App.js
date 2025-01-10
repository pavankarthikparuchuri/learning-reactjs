import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", { id: "heading" }, "Pavan");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading);
//JSX - HTML-like or XML-like syntax
//React Element
const JsxHeading = (
  <h1 className="head" tabIndex={1}>
    Hey using JSX
  </h1>
);

//React Component
const HeadingComponent = () => (
  <div id="container">
    {reactElement}
    <h2>{number}</h2>
    <h1 className="heading">Hey using Functional Component</h1>
  </div>
);

const elem = <h2>elem</h2>;

const Title = () => (
  <div>
    <h1>Title</h1>
  </div>
);
const reactElement = (
  <div>
    <h2>React Element</h2>
    {elem}
    <Title />
  </div>
);
const number = 100;
console.log(JsxHeading);
root.render(<HeadingComponent />);
