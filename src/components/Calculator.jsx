import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.scss';

const Calculator = () => {
  const keys = [
    {
      name: 'AC',
      id: 'ac',
    },
    {
      name: '+/-',
      id: 'plus-minus',
    },
    {
      name: '%',
      id: 'mod',
    },
    {
      name: '÷',
      id: 'divide',
    },
    {
      name: 'x',
      id: 'multi',
    },
    {
      name: '+',
      id: 'plus',
    },
    {
      name: '-',
      id: 'minus',
    },
    {
      name: '=',
      id: 'equal',
    },
    {
      name: '.',
      id: 'dot',
    },
    {
      name: '0',
      id: 'zero',
    },
    {
      name: '1',
      id: 'one',
    },
    {
      name: '2',
      id: 'two',
    },
    {
      name: '3',
      id: 'three',
    },
    {
      name: '4',
      id: 'four',
    },
    {
      name: '5',
      id: 'five',
    },
    {
      name: '6',
      id: 'six',
    },
    {
      name: '7',
      id: 'seven',
    },
    {
      name: '8',
      id: 'eight',
    },
    {
      name: '9',
      id: 'nine',
    },
  ];

  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResult] = useState(obj);

  const calHandler = (e) => {
    const btn = e.target.innerText;
    return setResult(calculate(result, btn));
  };

  const display = (item) => {
    if ((!item.total) && (!item.next)) {
      return '0';
    }
    if (!item.total) {
      return item.next;
    }
    if (item.next && item.total && item.operation) {
      return item.next;
    }
    return item.total;
  };

  return (
    <div className="cal-container">
      <span id="result" className="border-center">{ display(result) }</span>
      {
        keys.map((key) => (
          <span
            key={key.id}
            id={key.id}
            role="button"
            tabIndex={0}
            onClick={calHandler}
            onKeyDown={calHandler}
            className="border-center"
          >
            {key.name}
          </span>
        ))
      }
    </div>
  );
};
export default Calculator;
