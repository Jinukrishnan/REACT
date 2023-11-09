import React,{useState,memo} from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
    console.log("Counter",counter);
  return (
    <div>
        <h3>{counter}</h3>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
    </div>
  )
}

export default memo(Counter)
