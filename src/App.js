import React from 'react';
import logo from './image/logo-math.webp';
import './App.css';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Math Magicians</h1>
    </header>
    <Calculator />
  </div>
);

export default App;
