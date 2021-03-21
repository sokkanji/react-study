import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Test() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);