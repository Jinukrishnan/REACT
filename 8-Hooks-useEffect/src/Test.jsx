import React from 'react'
import { useEffect } from 'react'

const Test = () => {
    useEffect(()=>{
        console.log("running");
      
        return()=>{
          console.log("Unmount");
        };
      },[])
  return (
  <h1>Test Component</h1>
  )
}

export default Test
