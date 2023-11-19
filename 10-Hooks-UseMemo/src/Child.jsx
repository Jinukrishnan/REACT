import React from 'react'
import { memo } from 'react';
const Child = () => {
    console.log("ChildComponent");
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  )
}

export default memo(Child)
