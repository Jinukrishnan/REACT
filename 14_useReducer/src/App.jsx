import React, { useReducer } from 'react'


const count=0
const reducer=(state,action)=>{
  switch(action.type){
    case "increment":
      return state+action.value
    case "decrement":
      return state-action.value
    case "reset":
      return action.value
    default:
      return state
  }
}
// const reducer=(state,action)=>{
//   switch(action){
//     case "increment":
//       return state+1
//     case "decrement":
//       return state-1
//     case "reset":
//       return count
//     default:
//       return state
//   }
// }
const App = () => {
  const [state,dispatch]=useReducer(reducer,count)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"increment",value:5})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement",value:5})}>decrement</button>
      <button onClick={()=>dispatch({type:"reset",value:0})}>reset</button>
      {/* <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button> */}
    </div>
  )
}

export default App

