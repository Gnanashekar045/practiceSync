import React, { useState } from 'react'

const StateConter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increament</button>
        <button onClick={()=>{setCount(count - 1)}}>Decreament</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <h1>{count}</h1>
    </div>
  )
}

export default StateConter