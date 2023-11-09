import React,{useEffect, useRef, useState} from 'react'

import './App.css'

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

useEffect(()=>{
  console.log("running");
},[])
const inputRef=useRef();
const accessRef=()=>{
  console.log(inputRef.current);
}
  return (
    <>
   <form action="">
   <input type="text"  name='name' ref={inputRef} value={val.name} onChange={handleText} placeholder='name'/>
   <input type="text"  name='email' value={val.email} onChange={handleText} placeholder='email'/>
   <button onClick={accessRef}>Ref</button>
   </form>
    </>
  )
}

export default App
