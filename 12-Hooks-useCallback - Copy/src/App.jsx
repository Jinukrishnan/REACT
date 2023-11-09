import React,{ useCallback, useState} from 'react'

import './App.css'
import Counter from './Counter'

function App() {
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
  
const inc = ()=>{setCount2(count2+1)}
const increment=useCallback(()=>{setCount(count+1)},[count]);
console.log("Parent");
  return (
    <>
    <h1>Parent{count}{count2}</h1>
      <button onClick={inc}>Add</button>
      <Counter  increment={increment}/>
    </>
  )
}

export default App
