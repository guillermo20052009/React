import React from 'react'
import { useState } from 'react'

function Cuadro(props) {

  return (
    <input type="text" readOnly className="calculator-display" value={props.relleno} />
  )
}

export default Cuadro