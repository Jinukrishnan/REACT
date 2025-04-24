import React, { useReducer } from 'react'


const count=0
const reducer=(state,action)=>{
  switch(action.type){
    case "increment5":
      return state+action.value
    case "decrement5":
      return state-action.value
    case "increment10":
      return state+action.value
    case "decrement10":
      return state-action.value
    case "reset":
      return action.value
    default:
      return state
  }
}
const ActionAsObject = () => {
      const [state,dispatch]=useReducer(reducer,count)
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"increment5",value:5})}>increment 5 </button>
      <button onClick={()=>dispatch({type:"decrement5",value:5})}>decrement 5</button>
      <button onClick={()=>dispatch({type:"increment10",value:10})}>increment 10</button>
      <button onClick={()=>dispatch({type:"decrement10",value:10})}>decrement 10</button>
      <button onClick={()=>dispatch({type:"reset",value:0})}>reset</button>
    </div>
  )
}

export default ActionAsObject
