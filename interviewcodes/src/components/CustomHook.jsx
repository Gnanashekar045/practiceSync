import React, { useState } from 'react'

const CustomHook = (initial = 0) => {
const [count, setCount] = useState(initial = 0)

const Increament = () => setCount(count + 1)
const Decreament = () => setCount(count - 1)
const Reset = () => setCount(0)
  
return [count, Increament, Decreament, Reset]
}

export default CustomHook