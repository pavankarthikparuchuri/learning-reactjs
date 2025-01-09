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
- Transitive Dependencies:-  dependencies of a package and the dependencies of them and them.
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
- example:-  npx parcel index.html

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
- creates different dev and production bundles.