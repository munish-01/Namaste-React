import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//React.createElement => ReactElement - Js Object=.HTMLelement(render)

// create react element using CORE REACT
// const heading = React.createElement('h1', {id: "heading"}, "Hello world")

// JSX - HTML - Like or XML Like systax
//JSX- Where we can merge html and js together // JSX is HTML like sysntax
//All this is get done with the help of babel of the parcel
//JSX- //React.createElement => ReactElement - Js Object=.HTMLelement(render)
// JSX (Transpiled before it reaches the JS Engine) - Transpiled done by Parcel - parcel transpiled ek package se karvata hai name hai - BABEL

//Slight difference in between JSX and HTML
//For class use (className)
//for tabindex use (tabIndex)

// THIS IS CREATED USING JSX
// single line jsx
// const jsxHeading = <h1 id="heading" className="heading" tabIndex="1">react using JSX</h1>

// const heading = (
//   <div>
//     <h1 id="heading">react using JSX</h1>
//   </div>
// );

//React Componenet(2 types)
//1) Class Based Component - OLD way
//2) Functional Component - NEW way

//React Functional Component

// const HeadingComponent1 = () =>{
//   // single line
//   <h1 id="heading">react using JSX</h1>
// }

// upper and this both are same
// const HeadingComponent1 = () => <h1 id="heading">react using JSX</h1>

// const HeadingComponent = () => {
//   <div>
//   <h1 id="heading">react functional component</h1>
//   </div>
// }

// const HeadingComponent = () => {
//   return <h1 id="heading">react functional component</h1>
// }

// example of two components
// this is also a Component Composition - calling a component inside another component

// NORMAL FUNCTION
// const Title = function() {
//   return  <h1 className="heading">Title ko render karvaya</h1>
// };

const Title = () => {
  return  <h1 className="heading">Title ko render karvaya</h1>
};

// const HeadingComponent = () => {
//   return (
//   <div>
//   <Title/>
//     <h1 className="heading">react functional component</h1>
//   </div>
//   )
// };

// JS CODE INSIDE JSX

const number = 10000;

// CALLING REACT ELEMENT IN JSX
const elem = <span>calling react element</span>;

const HeadingComponent = () => (
  <div>
    <h2>{number}</h2>
    {elem}
    <h2>{100 + 200}</h2>
    {/* we can call title function  */}
    {Title()}
    <h1 className="heading">react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
