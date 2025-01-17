import React from 'react';
import Button from './Button'; 
import './buttons.css';  

function ButtonPanel(props) {
  const buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const columns = buttons[0].map((_, colIndex) => buttons.map(row => row[colIndex]));

  return (
    <div className="d-flex flex-wrap justify-content-center mt-5">
      {columns.map((col, colIndex) => (
        <div className="button-column" key={colIndex}>
          {col.map((button, buttonIndex) => (
            <Button 
              key={buttonIndex} 
              label={button} 
              onClick={() => props.onClick(button)} 
              className={colIndex === 3 ? 'orange-button' : ''} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
