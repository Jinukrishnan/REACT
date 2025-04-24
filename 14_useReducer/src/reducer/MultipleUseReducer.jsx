import React, { useReducer } from 'react'
const count1=0
const count2=0
const reducer=(state,action)=>{
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    case "reset":
      return 0
    default:
      return state
  }
}
const MultipleUseReducer = () => {
     const [state1,dispatch1]=useReducer(reducer,count1)
     const [state2,dispatch2]=useReducer(reducer,count1)
  return (
    <div>
      <h1>Count 1 : {state1}</h1>
       <button onClick={()=>dispatch1("increment")}>increment</button>
      <button onClick={()=>dispatch1("decrement")}>decrement</button>
      <button onClick={()=>dispatch1("reset")}>reset</button>
      <hr />
      <h1>Count 2 : {state2}</h1>
       <button onClick={()=>dispatch2("increment")}>increment</button>
      <button onClick={()=>dispatch2("decrement")}>decrement</button>
      <button onClick={()=>dispatch2("reset")}>reset</button>
    </div>
  )
}

export default MultipleUseReducer
