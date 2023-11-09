import React  from 'react'

const Todo = ({todos,addTodo}) => {
    console.log("child");
  return (
    <div>
      <h2>My todo</h2>
      {
        todos.map((todo,index)=>{
            <p key={index}>{todo}</p>
        })
      }
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default Todo
