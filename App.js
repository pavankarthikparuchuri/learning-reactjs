const heading = React.createElement('h1', {id: "heading"}, "Hello World from React");
//heading is a react element which is a normal javascript object
// the second arguement will be an object through which we pass attributes to the tags
const root = ReactDOM.createRoot(document.getElementById('root')); 
// root is the place where all the react code runs
// root.render(heading);
// render is a method of root object which takes a react element and renders it to the dom
//render method is responsible for taking the react element and creating an element in the dom

// nested html structure
{/* <div id="parent">
    <div id = "child">
        <h1></h1>
    </div>
</div> */}

// const heading1 = React.createElement("h1", {id: "heading"}, "Hey there");
// const child = React.createElement("div", {id: "child"}, heading1);
// const parent = React.createElement('div',{id:"parent"}, child);
//ReactElement(Object) => HTML(Browser understands)

const parent = React.createElement("div", {id: "parent"}, 
                            React.createElement("div", {id: "child"},
                             React.createElement("h1", {}, "Hello")));
console.log(parent);
// root.render(parent);

//add siblings
{/* <div id="parent">
    <div id = "child">
        <h1>sib1</h1>
        <h2>sib2</h2>
    </div>
</div> */}

const parent2 = React.createElement("div", {id: "parent"}, 
                            React.createElement("div", {id: "child"}, 
                            [React.createElement("h1", {}, "sib1"), 
                            React.createElement("h1", {}, "sib2")]));
// console.log(parent2);
// root.render(parent2);

{/* <div id="parent">
    <div id = "child1">
        <h1>sib1</h1>
        <h2>sib2</h2>
    </div>
    <div id = "child2">
        <h1>sib1</h1>
        <h2>sib2</h2>
    </div>
</div> */}

const parent3 = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
    [React.createElement("h1", {}, "sib1"), 
    React.createElement("h1", {}, "sib2")]), 
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "sib1"), 
        React.createElement("h1", {}, "sib2")])]);
// console.log(root);
root.render(parent3);

//The above structure looks ugly and tedious to write and read that is why we use JSX
