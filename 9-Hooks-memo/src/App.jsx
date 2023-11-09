import React,{useEffect, useState} from 'react'

import './App.css'
import Counter from './assets/Counter';

function App() {
  const [val,setVal]=useState({
    name:"",
    email:""
  });
const handleText=(e)=>{
setVal((pre)=>{
  return{...pre,[e.target.name]:e.target.value}
})
}

console.log("Parent");
  return (
    <>
   <input type="text"  name='name' value={val.name} onChange={handleText} placeholder='name'/>
   <input type="text"  name='email' value={val.email} onChange={handleText} placeholder='email'/>
   <Counter/>
    </>
  )
}

export default App
