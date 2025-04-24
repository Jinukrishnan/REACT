import React, { useReducer } from 'react'
const count=0
const reducer=(state,action)=>{
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    case "reset":
      return count
    default:
      return state
  }
}
const UseReducer = () => {
     const [state,dispatch]=useReducer(reducer,count)
  return (
    <div>
      <h1>{state}</h1>
       <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default UseReducer
