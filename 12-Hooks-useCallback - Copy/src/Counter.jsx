import React, { memo, useRef } from 'react'

const Counter = ({increment}) => {

  console.log("Child");
  return (
    <div>
      {/* <h1>Child{data}</h1> */}
      <button onClick={increment}> ChildADD</button>
     
    </div>
  )
}

export default memo(Counter)
