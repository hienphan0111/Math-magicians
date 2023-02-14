import React from 'react';
import './Calculator.scss';

const Calculator = () => (
  <div className="cal-container">
    <span id="result" className="border-center">0</span>
    <span id="ac" className="border-center">AC</span>
    <span id="plus-minus" className="border-center">&#177;</span>
    <span id="mod" className="border-center">%</span>
    <span id="divide" className="orange">&#247;</span>
    <span id="multi" className="orange">x</span>
    <span id="minus" className="orange">-</span>
    <span id="plus" className="orange">+</span>
    <span id="equal" className="orange">=</span>
    <span id="nine" className="border-center">9</span>
    <span id="eight" className="border-center">8</span>
    <span id="seven" className="border-center">7</span>
    <span id="six" className="border-center">6</span>
    <span id="five" className="border-center">5</span>
    <span id="four" className="border-center">4</span>
    <span id="three" className="border-center">3</span>
    <span id="two" className="border-center">2</span>
    <span id="one" className="border-center">1</span>
    <span id="zero" className="border-center">0</span>
    <span id="dot" className="border-center">.</span>
  </div>
);

export default Calculator;
