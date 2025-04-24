import React from 'react'
import useCustomHook from './useCustomHook'
function Custom() {
    const{val,increment,decrement}=useCustomHook(0)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{val}</span>
      <button onClick={increment}>+</button>

    </div>
  )
}

export default Custom
