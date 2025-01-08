import React from 'react';
import Button from './Button'; 
import './buttons.css';  

function ButtonPanel({ onClick }) {
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', '(', ')', '%'],
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, rowIndex) => (
        <div className="button-row" key={rowIndex}>
          {row.map((button, buttonIndex) => (
            <Button key={buttonIndex} label={button} onClick={() => onClick(button)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
