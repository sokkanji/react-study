import React from 'react';
import { createGlobalStyle } from 'styled-components';

import logo from './logo.svg';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>안녕하세요</div>
    </> 
  );
}

export default App;
