import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function ListItem(props){
  const value = props.value;
  return (
    <li>{value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <ListItem value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);