# React js Notes

# React

- React is a Javascript Library which is used to build large scale applications.

# React Dom

- React DOM is used to render react elements to the DOM.

# Why do we have two different packages React and React DOM instead one.

- React as a library consists of all core functionalities and is not specific to any environment/platform it is also used in other platforms as well apart from web like react native, react vr whereas react dom is specific to rendering react elements to the browser environment.

# NPM

- NPM is a package manager which contains many packages that we can install in our project. it's abbreavtion is not node package manager. to install packages in our project we use npm install <package_name> command

- npm init is the first command used this configures a package.json.

# Package.json

- This is a configuration of npm. npm manages all the packages and its versions in package.json. package.json keeps track of dependencies and their versions.

- ^ (caret) - used infront of package version, this allows to update the package when there are minor upgrades.
- ~ (tilda) - used infront of package version, this allows to update the package when there are major upgrades.

# Package-lock.json

- This consists of the exact versions of the versions of the dependencies and also the sub dependencies of the dependencies.
- Transitive Dependencies:- dependencies of a package and the dependencies of them and them.
- package-lock.json also contains the transisitive dependencies.

# Types of Dependencies

- There are two types of dependencies which are dev dependencies which are used only in the development phase and normal dependencies which are used in production, development etc.
  to install dev dependencies command is npm install -D package_name
  for normal dependencies command is npm install package_name

# Nodemodules

- Nodemodules consists of all the code fetched from installing the packages.
- no need to push this to git as this can regenerated using npm install command, if we have package and package.json files in git.

# NPX

- npx command is used to execute a package
- example:- npx parcel index.html

# Web bundlers

- bundlers are used to minify, compress, clean our code and make it production ready. this is done by web bundlers. examples of web bundlers are parcel, web pack, veet.

# Parcel

- Parcel creates a development build and hosts it to the local server.
- Automatically refreshing the page when there are changes made to the app (HMR).
- HMR means HOT MODULE REPLACEMENT.
- parcel is doing HMR when there are app changes.
- parcel uses a File Watching algorithm (written in c++) to implement HMR.
- uses caching for faster builds.
- It is caching in parcel-cache folder.
- parcel also does image optimization, minification, bundling, compresses the files.
- parcel also uses consistent hashing.
- parcel also does code splitting, differential bundling(parcel does different bundling based on browser type to support working in old browsers).
- does Diagnostics and does error handling
- also supports hosting in HTTPS (npx parcel index.html --https)
- also does tree shaking - remove unused code.
- creates different dev and production bundles.(for creating production build command is npx parcel build index.html)

# Scripts

- instead of using npx parcel index.html every time for creating a dev build and hosting it in localhost:1234, we can use scripts in package.json to give this command a keyword and just use npm run keyword.

- changes made in package.json for creating dev and prod builds. used start keyword for creating dev build and build keyword for prod build.
  "scripts": {
  "test": "jest",
  "start": "parcel index.html",
  "build": "parcel build index.html"
  },

- "npm run start" is similar to "npm start" we can just use npm start to run the dev build. and for creating prod build we should use "npm run build".

- Note:- only for start keyword we can ignore run keyword and just call npm start for the rest we need to use npm run keyword.

# JSX

- creating React elements using react.createElements is not developer friendly and also tedious to understand.
- Facebook developers thus created JSX to help the developer community.
- JSX is a javascript syntax to create react elements.
- JSX is not HTML in javascript.
- JSX is HTML like syntax.
- const JsxHeading = <h1 id="heading">Hey using JSX</h1>;
- This is not valid pure Javascript, Javascript engines and browsers understand ecmascript(es) syntax
- JSX code is transpiled before it reaches the javascript engine.
- transpiling means converting the code from one language to another.
- transpiling is done for converting the code that browser, js engine can understand.
- transpiling is done by parcel.
- parcel is kind of like a manager which gives this job to babel.
- JSX is a syntactic sugar for React.createElement and babel converts it to React.createElement.
- React.createElement => React Element(JS OBJECT) => HTML(render)
- JSX =>(babel transiles it to React.createElement) => React.createElement => React Element(JS OBJECT) => HTML(render)

# React Component

- Everything in React is a component
- Two ways of creating components
- Class Based Components - old way for building components, uses Javascript Classes for building components
- Functional Components - new way of building components, uses Javascript Functions for building components
- React Functional Component is just a normal javascript function that returns a React Element.
- Functional Component should start with a Capital Letter

  const HeadingComponent = () => {
  return <h1 className="heading">Hey using Functional Component</h1>;
  };
  (same as)
  const HeadingComponent = () => (
     <h1 className="heading">Hey using Functional Component</h1>;
    );

- root.render(<HeadingComponent />); this is how heading component is rendered

- Babel transpiles this functional component to react element

- component composition means composing two components in one another.
  const JsxHeading = (
    <h1 className="head" tabIndex={1}>
        Hey using JSX
    </h1>
    );

  //React Component
  const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Hey using Functional Component</h1>
    </div>
    );

- We can inject any piece of javascript code inside JSX using "{}"
  const HeadingComponent = () => (
    <div id="container">
        <Title />
        {reactElement}
        <h2>{number}</h2>
        <h1 className="heading">Hey using Functional Component</h1>
    </div>
    );

  const Title = () => <h1>Title</h1>;
  const reactElement = <h2>React Element</h2>;
  const number = 100;

- You can also write a react element inside another react element using "{}"

      const elem = <h2>elem</h2>;
      const reactElement = (

    <div>
      <h2>React Element</h2>
      {elem}
    </div>
  );

- You can also use a Component inside a element
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

- JSX won't blindly execute the code written inside curly braces it sanitizes the data.
- It prevents cross-site scripting.

- "<Title/>" and "<Title></Title>" both are same. also you can execute it like {Title()}
- JSX is what makes our code readable

# Props

- Props are the properties that are passed to a component.
- Similar to the arguements that are passed to a function.
- When we want to dynamically pass something to a component pass it as a prop.

# Config Driven UI

- Our website is driven by data, config.
- config driven ui means controlling your ui based on data, config.
- The data comes from apis, backend.

# Use Key attribute for the components called inside a loop

- If we aren't using key for the components inside a loop then when react re-renders all the loop elements gets re-rendered.
- using key attributes helps react to re-render only the newly added components.
- key should be unique for every component.
- using key improves performance.
- Note:- React itself says that not to use indexes as key. It is not recommended.
- A key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
- when the list is static, not filtered, re-ordered, no ids then use indexes.
- still if you have choice avoid using indexes as much as you can.

# Why do we use React

- Everything we can implement using React can also be done using normal HTML, CSS, Javascript
- The Beauty of using a library and a framework is it makes the developers life easy, we can write less code and implement more stuff in the web page.
- React makes your coding experience very fast and then also optimizes things on webpage so that things happen very fast.

# Industry Best Practices

- Make a seperate file for every component.
- All the components should be in src folder.

# Food Ordering App

- Header Component
- -Logo
- -Nav Item
- Body Component
- - Search Component
- - Restaurant Container
- - Restaurant Card
- - Image
- - Restaurant Name
- - cuisines
- - Rating
- - Delivery Time
- Footer
- - CopyRight
- - Links
- - Address
- - Contact

# Types of export and import

- There are two types of export namely default export and named export.
- we can only have one default export for a file.
- If there are multiple thigs which we want to export in a single file we use export keyword before the variable name this is called named export.
- whenever we have a named export we use "{}" to import those.
- For a default export, no need to use curly braces for import.
- we can have both named exports and default exports in a single file.
- export default Component, import Component from "path"
- export const Component, import {Component} from "path"

# Default key in export

- There can be multiple export statements in a single file. default key can only be using once in the whole file to let you import the variable without using {} brackets.
  ![Default usage](image.png)

# React Hooks

- React is fast in DOM manipulation, this is what react solves.
- suppose we want to make data and ui layer consistent with each other this is what react, angular and other frameworks are trying to solve.
- Hooks are normal javascript functions that are given by React that are pre-built.
- React Hooks are Normal JS utility functions written by facebook.
- useState() - SuperPowerful state variables in React.
- state variable maintains the state of the component.
- Local state variables scope is inside the component.
- useState() gives a state variable and that you can get using const [state_variable] = useState();
- the default value to the state variable is passed inside useState like useState(default_value);
- to modify the state variable we use setstate function.
- const [state, setState] = useState(default_value).
- This super powerful state variable tries to keep the UI layer in sync with data layer.
- whenever a state variable updates, React re-renders its component.
- whenever there is change in the state variable react will remove the body and quickly update the ui properly.

# Reconciliation Algorithm

- React uses Reconciliation algorithm which is also known as React fiber.
- virtual DOM is a representation of actual DOM.
- virtual DOM is an JS Object.
- Actual DOM is <div><img/></div>, virtual DOM is {div : {img}} somewhat like this.
- This algorithm basically tries find the difference between two virtual DOMs and updates the Actual DOM.
- Finding out difference in the HTML nodes it different and it is easy to figure out in objects.
- That's why React is faster it tries to check the previous virtual DOM and the updated DOM which are objects and updates the Actual DOM.

# Diff Algorithm

- Diff Algorithm finds the difference between two virtual DOMs.
- Finds the difference between previous and updated virtual DOMs.
- It will find the difference and does the change on every render cycle.
