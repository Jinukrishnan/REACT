import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const[val,setVal]=useState({
    name:"",
    price:"",
    poster:"",
    banner:""

  })

  const getText=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  const getPic=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.files[0]}))
  }

const handleSubmit=async(e)=>{
e.preventDefault();
console.log(val);
const formData=new FormData()
console.log(Object.entries(val));
Object.entries(val).map(item=>formData.append(item[0],item[1]))

const res=await axios.post("http://localhost:3001/api/add",formData,{headers:{"Content-Type":"multipart/form-data"}})
console.log(res);
}
  return (
    <>
     <form onSubmit={handleSubmit}>
      <div><input type="text" onChange={getText} placeholder='name' name='name' id='name' /></div>
      <div><input type="text" onChange={getText} placeholder='price' name='price' id='price' /></div>
      <div><input type="file" onChange={getPic} placeholder='poster' name='poster' id='poster' /></div>
      <div><input type="file" onChange={getPic} placeholder='banner' name='banner' id='banner' multiple /></div>
      <div><input type="submit" /></div>
     </form>
    </>
  )
}

export default App
