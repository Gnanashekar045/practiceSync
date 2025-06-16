import React, { useState } from 'react'

const SearchInput = () => {
    const [inputTerm, setInputTerm] = useState("")
    const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Julia"];

    const filtered = users.filter((usr)=>(
        usr.toLowerCase().includes(inputTerm.toLowerCase())
    ))

  return (
    <div>
        <input type="text"  value={inputTerm} onChange={(e)=>{setInputTerm(e.target.value)}} placeholder='Search Users...'/>
        <ul>
            {filtered.map((val, index)=>(
                <li key={index}>{val}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchInput