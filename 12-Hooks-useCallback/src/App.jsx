import React,{ useCallback, useState} from 'react'

import './App.css'
import Counter from './Counter'

function App() {
  const [count,setCount]=useState(0)
console.log(count);

const increment=useCallback(()=>{setCount(count+1)},[setCount]);
  return (
    <>
      <Counter  increment={increment}/>
    </>
  )
}

export default App
