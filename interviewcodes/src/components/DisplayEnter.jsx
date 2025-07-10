import React, { useState } from 'react'

const DisplayEnter = () => {
    const [input, setInput] = useState('')
  return (
    <div>
        <label htmlFor="">Enter input</label><br />
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Original'/><br/> <br/>

        <input type="text" value={input} placeholder='Mirror'/>
    </div>
  )
}

export default DisplayEnter