import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//creating single Element with the help of the JSX.
// const element = <h1 className="testClass">This is single element</h1>;
//need to render above element into our browser DOM.for tht we need a container
// ReactDOM.render(element,document.getElementById("root"));

//Creating multiple Elements with the help of JSX.
const x = "This is Sai Kumar Kanaparthi.";
const y = 77;
const mapArray = new Map();
mapArray.set("name", "Sai Kumar");
mapArray.set("age", "25");
var addressArray = [{
  city: "Hyderabad",
  street: "KPHB",
  BuildName: "Lodha"
},
{
  city: "Mumbai",
  street: "Ghansoli",
  BuildName: "Sai Sarwanand"
},
{
  city: "Vijayawada",
  street: "One Town",
  BuildName: "Radhan"
},
];
const element = (
  <div>
    <h4 className="testClass">{x + y}</h4>
    <h4 className="element2">Name is  {mapArray.get("name")} and Age is {mapArray.get("age")}</h4>
    <ul>
      <li>{addressArray[0].city}</li>
      <li>{addressArray[0].street}</li>
      <li>{addressArray[0].BuildName}</li>
    </ul>
  </div>
)
ReactDOM.render(element, document.getElementById("root"));

//creating single element without JSX.
//const element = React.createElement("h1",null,"This Element created without JSX");
//ReactDOM.render(element,document.getElementById("root"));

//creating muliple Elements without JSX.
// const element = React.createElement("<div>",null,
// React.createElement("h1",null,"This is First Child"),
// React.createElement("h2",null,"This second Child"));
// ReactDOM.render(element,document.getElementById("root"));


