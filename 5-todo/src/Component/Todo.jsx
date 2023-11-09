import React, { Component } from 'react'
import "./Todo.css";
export default class Todo extends Component { 

  state={
    input:"",
    items:[]
  }
  handleChange=(event)=>{

    this.setState({
      input:event.target.value
    })
   
  }
  storeItems=(event)=>{
    event.preventDefault();
    const {input,items}=this.state
    // const allItems=this.state.items
    // allItems.push(input);
    // this.setState({
    //   items:allItems,
    //   input:""
    // })
    this.setState({
        items:[...items,input],
        input:""
    })
    console.log(items);
  }

  HandleDelete=(ind)=>{
    console.log(ind);
    const{items}=this.state
    // const del=items
    // del.splice(index,1)
    // this.setState({
    //   items:del
    // })
    this.setState({
      items:items.filter((item,index)=>index!==ind)
    })
  }
  render() {
    const {input,items}=this.state
    console.log(items);
    return (
  
      <div className='todo-container'>
            <form className='input-section' onSubmit={this.storeItems} >
                <h1>Todo App</h1>
                <input type="text" value={input} placeholder='Enter Items...' onChange={this.handleChange}/> 
            </form>
            <ul>
              {
                items.map((item,index)=>{
                 return(
                  <li key={index}> {item}<i className="fa-solid fa-trash-can" onClick={()=>{
                    this.HandleDelete(index)
                  }}></i> </li>
                 )  
                })
              }
              
                   
                 
            </ul>
      </div>
    )
  }
}
