import React, { useReducer } from 'react'

const reducer = (state, action) => {
        switch (action.type) {
            case "Increment": return {count: state.count + 1}
            case "Decrement": return {count: state.count - 1}
            case "Reset": return {count: 0}

            default: return state;
        }
    }

    const UseReducerCounter = () => {
        const [state, dispatch] = useReducer(reducer, {count: 0});

        return (
            <div style={{textAlign: 'center'}}>
                <h2>Count: {state.count}</h2>
                <button onClick={()=> dispatch({type: "Increment"})}>Increment</button>
                <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>
                <button onClick={()=> dispatch({type: "Reset"})}>Reset</button>
            </div>
        )
    }


export default UseReducerCounter