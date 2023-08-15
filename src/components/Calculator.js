import React, { useState } from 'react';
import calculate from '../logic/calculator';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    const result = calculate(state, btnName);
    setState(result);
  };

  return (
    <section id="calculator">
      <h2>Let&apos;s do some math</h2>
      <div className="operators">
        <span className="display">
          {`${state.total || ''}${state.operation || ''}${state.next || ''}` || '0'}
        </span>
        <button type="button" className="grey" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="grey" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" className="grey" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="orange" onClick={() => handleClick('÷')}>÷</button>
        <button type="button" className="grey" onClick={() => handleClick('7')}>7</button>
        <button type="button" className="grey" onClick={() => handleClick('8')}>8</button>
        <button type="button" className="grey" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="orange" onClick={() => handleClick('x')}>x</button>
        <button type="button" className="grey" onClick={() => handleClick('4')}>4</button>
        <button type="button" className="grey" onClick={() => handleClick('5')}>5</button>
        <button type="button" className="grey" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="orange" onClick={() => handleClick('-')}>-</button>
        <button type="button" className="grey" onClick={() => handleClick('1')}>1</button>
        <button type="button" className="grey" onClick={() => handleClick('2')}>2</button>
        <button type="button" className="grey" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="orange" onClick={() => handleClick('+')}>+</button>
        <button type="button" className="grey zero" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="grey" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="orange" onClick={() => handleClick('=')}>=</button>
      </div>
    </section>
  );
}

export default Calculator;
