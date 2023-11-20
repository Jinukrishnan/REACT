import React, { createContext, useState }  from 'react'
const userContext=createContext();
const Todo = () => {
 const [user,setuser]=useState("synnefo");
  return (
    <UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    {/* <Component2 /> */}
  </UserContext.Provider>
  )
}

export default Todo
