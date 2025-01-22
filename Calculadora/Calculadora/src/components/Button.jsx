import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={() => props.onClick(props.label)} style={props.style} className={props.className}>{props.label}</button>
    </div>
  );
}

export default Button;