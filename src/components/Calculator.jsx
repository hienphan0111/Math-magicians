import React from 'react';
import './Calculator.scss';

const Calculator = () => (
  <div className="cal-container">
    <span id="result">0</span>
    <span id="ac">AC</span>
    <span id="plus-minus">&#177;</span>
    <span id="mod">%</span>
    <span id="divide">&#247;</span>
    <span id="multi">x</span>
    <span id="minus">-</span>
    <span id="plus">+</span>
    <span id="equal">=</span>
    <span id="9">9</span>
    <span id="8">8</span>
    <span id="7">7</span>
    <span id="6">6</span>
    <span id="5">5</span>
    <span id="4">4</span>
    <span id="3">3</span>
    <span id="2">2</span>
    <span id="1">1</span>
    <span id="zero">0</span>
    <span id="dot">.</span>
  </div>
);

export default Calculator;
