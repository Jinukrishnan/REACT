import React,{useEffect, useState} from 'react'

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
  return (
    <>
   <input type="text"  name='name' value={val.name} onChange={handleText} placeholder='name'/>
   <input type="text"  name='email' value={val.email} onChange={handleText} placeholder='email'/>
    </>
  )
}

export default App
