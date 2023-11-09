import React,{useState} from 'react'

const Counter = (props) => {
   const {count}=props.data
console.log("Child");
  return (
  <div>
    <h1>Child {count}</h1>
  </div>
  )
}

export default Counter
