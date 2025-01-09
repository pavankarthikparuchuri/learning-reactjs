import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root')); 

const parent3 = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
    [React.createElement("h1", {}, "hi there 1"), 
    React.createElement("h1", {}, "hi there 2")]), 
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "sib1"), 
        React.createElement("h1", {}, "sib2")])]);
// console.log(root);
root.render(parent3);

//The above structure looks ugly and tedious to write and read that is why we use JSX
