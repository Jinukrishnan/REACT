import React, { useReducer } from 'react'

const initState={
    count1:0,
    count2:0
}
const reducer=(state,action)=>{
    switch(action){
        case "increment1":
            return{ ...state,count1:state.count1+1}
        case "decrement1":
            return { ...state,count1:state.count1-1}
        case "reset1":
            return initState
        case "increment2":
            return{ ...state,count2:state.count2+1}
        case "decrement2":
            return { ...state,count2:state.count2-1}
        case "reset2":
            return initState
        default:
            return state
    }
}
const StateAsObject = () => {
    const [state,dispatch]=useReducer(reducer,initState)
  return (
    <div>
      <h1>Count 1 : {state.count1}</h1>
      <button onClick={()=>dispatch("increment1")}>increment1</button>
      <button onClick={()=>dispatch("decrement1")}>decrement1</button>
      <button onClick={()=>dispatch("reset1")}>reset1</button>
      <hr />
      <h1>Count 2: {state.count2}</h1>
      <button onClick={()=>dispatch("increment2")}>increment2</button>
      <button onClick={()=>dispatch("decrement2")}>decrement2</button>
      <button onClick={()=>dispatch("reset2")}>reset2</button>
    </div>
  )


}

export default StateAsObject
