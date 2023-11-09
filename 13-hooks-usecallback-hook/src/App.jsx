import { useCallback, useState } from 'react'
import Todo from './Component/Todo'
import './App.css'

function App() {
 const [count,setCount]=useState(0)
 const [todos,setTodos]=useState([])

const adddTodo=useCallback(
  ()=>{
    setTodos((t)=>[...t,"new todo"])
  },[todos])

 const inrement=()=>{
  setCount(count+1)
 }
 console.log("parent");
  return (
    <>
    <div>
      <Todo todos={todos} addTodo={adddTodo} />
      <hr />
    </div>
     <div>
     <h1>{count}</h1>
      <button onClick={inrement}>Click</button>
     </div>
    </>
  )
}

export default App
