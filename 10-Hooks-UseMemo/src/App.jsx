import React,{useEffect, useMemo, useState} from 'react'

import './App.css'
import Counter from './Counter';


function App() {
const [count1,setCount1]=useState(0)
const [count2,setCount2]=useState(0)
const cnt=useMemo(()=>Counter({data:count1}),[count1])
console.log("Parent");
  return (
    <>
      <h1>Parent{count2}</h1>
     {cnt}
     {/* <Counter data={count1}/> */}
      <button onClick={()=>{setCount2(count2+1)}}>ParentCounter</button>
      <button onClick={()=>{setCount1(count1+1)}}>Child Counter</button>
    </>
  )
}

export default App
