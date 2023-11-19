import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child';
const myArray=["a","b","c","d"];
function App() {
  const [count, setCount] = useState(0);
  // const myArray=useMemo(()=>{["a","b","c","d"]},[]);
  const increment=useCallback(()=>{setCount(count+1)},[count ])
  return (
    <>
    <h1>{count}</h1>
     <button onClick={increment}>Counter</button>
      <Child myArray={myArray}/>
    </>
  )
}

export default App
