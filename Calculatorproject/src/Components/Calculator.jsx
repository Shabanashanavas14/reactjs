import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    setInput(input === '0' ? value : input + value);
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleDelete = () => {
    setInput(input.length > 1 ? input.slice(0, -1) : '0');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="button clear">
          C
        </button>
        <button onClick={handleDelete} className="button">
          Del
        </button>
        <button onClick={() => handleClick('/')} className="button">
          /
        </button>
        <button onClick={() => handleClick('*')} className="button">
          *
        </button>
        <button onClick={() => handleClick('7')} className="button">
          7
        </button>
        <button onClick={() => handleClick('8')} className="button">
          8
        </button>
        <button onClick={() => handleClick('9')} className="button">
          9
        </button>
        <button onClick={() => handleClick('-')} className="button">
          -
        </button>

        <button onClick={() => handleClick('4')} className="button">
          4
        </button>
        <button onClick={() => handleClick('5')} className="button">
          5
        </button>
        <button onClick={() => handleClick('6')} className="button">
          6
        </button>
        <button onClick={() => handleClick('+')} className="button">
          +
        </button>

        <button onClick={() => handleClick('1')} className="button">
          1
        </button>
        <button onClick={() => handleClick('2')} className="button">
          2
        </button>
        <button onClick={() => handleClick('3')} className="button">
          3
        </button>
        <button onClick={() => handleClick('%')} className="button">
          %
        </button>
        <button onClick={() => handleClick('0')} className="button">
          0
        </button>

        <button onClick={() => handleClick('.')} className="button">
          .
        </button>
        <button onClick={handleEvaluate} className="button equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
