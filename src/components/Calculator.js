/* eslint-disable */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator () {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleClick = (event) => {
    const result = calculate(state, event.target.value);
    setState(result);
  };

  const handleDisplay = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="grid">
      <button className="top-bar" onChange={handleDisplay}>{state.next || state.total || 0}</button>
      <button type="button" value="AC" onClick={handleClick}>AC</button>
      <button type="button" value="+/-" onClick={handleClick}>+/-</button>
      <button type="button" value="%" onClick={handleClick}>%</button>
      <button type="button" value="÷" className="orange" onClick={handleClick}>÷</button>
      <button type="button" value="7" onClick={handleClick}>7</button>
      <button type="button" value="8" onClick={handleClick}>8</button>
      <button type="button" value="9" onClick={handleClick}>9</button>
      <button type="button" value="x" className="orange" onClick={handleClick}>x</button>
      <button type="button" value="4" onClick={handleClick}>4</button>
      <button type="button" value="5" onClick={handleClick}>5</button>
      <button type="button" value="6" onClick={handleClick}>6</button>
      <button type="button" value="-" className="orange" onClick={handleClick}>-</button>
      <button type="button" value="1" onClick={handleClick}>1</button>
      <button type="button" value="2" onClick={handleClick}>2</button>
      <button type="button" value="3" onClick={handleClick}>3</button>
      <button type="button" value="+" className="orange" onClick={handleClick}>+</button>
      <button type="button" value="0" className="bottom-bar" onClick={handleClick}>0</button>
      <button type="button" value="." onClick={handleClick}>.</button>
      <button type="button" value="=" className="orange" onClick={handleClick}>=</button>
    </div>
  );
}

export default Calculator;
