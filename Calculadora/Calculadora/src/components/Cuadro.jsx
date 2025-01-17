import React from 'react'
import { useState } from 'react'

function Cuadro(props) {
  return (
    <div className="form-group">
      <input 
        type="text" 
        readOnly 
        className="form-control calculator-display" 
        value={props.relleno} 
        style={{ fontSize: '2rem', textAlign: 'right' }}
      />
    </div>
  )
}

export default Cuadro