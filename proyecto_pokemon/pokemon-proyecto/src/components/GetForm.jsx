import React, { useState } from 'react'

function GetForm(props) {
    const [from,setFrom]= useState(1);
    const [to,setTo]= useState(10);
    

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFrom(e.target.value);
  }
  const handleChange2 = (e) => {
    // console.log(e.target.value);
    setTo(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPokemons(from,to);
  }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="from">From: </label>
            <input type="number" id="from" min={1} onChange={handleChange}/>
        </fieldset>
        <fieldset>
            <label htmlFor="to">To: </label>
            <input type="number" id="to" min={1} onChange={handleChange2}/>
        </fieldset>
        <button>Get Pokemon</button>
    </form>
  )
}

export default GetForm