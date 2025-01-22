import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';

function Cuadros(props) {
  const handleChange = (e) => {
      const value = e.target.value;
      const modifiedValue = value.toLowerCase().replace(/ /g, "-");
      console.log(modifiedValue); 
      props.setDatos(props.id, modifiedValue); 
    };

  return (
    <>
      <input 
        type="text"  
        placeholder={props.placeHolder} 
        onChange={handleChange} 
      />
    </>
  );
}

export default Cuadros;
