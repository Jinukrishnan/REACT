import React, { memo, useRef } from 'react'

const Counter = (props) => {
    const ref=useRef(0);
    console.log("data",ref.current++);
  return (
    <div>
      
      <button onClick={props.increment}>Click</button>
    </div>
  )
}

export default memo(Counter)
