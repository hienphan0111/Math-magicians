import React, { Fragment } from 'react';
import { ReactDOM } from 'react-dom';
import logo from './image/logo-math.webp';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Math Magicians</h1>
        <p>This is math app</p>
      </header>
    </div>
  );
}

export default App;
