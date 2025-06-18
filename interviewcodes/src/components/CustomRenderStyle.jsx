import React, { useState } from 'react'

const CustomRenderStyle = () => {
    const [isOnline, setIsOnline] = useState(true)
  return (
    <div>
        <h1 style={{color: isOnline ? "green" : "red"}}>
            {isOnline ? "Online" : "Offline"}
        </h1>
        <button onClick={()=> setIsOnline(!isOnline)}>Toggle Status</button>
    </div>
  )
}

export default CustomRenderStyle