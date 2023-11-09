import React, { Component } from 'react'
export default class Form extends Component {
    state={fname:"",lname:"" }
    onHandleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }  
    onHandleClick=(e)=>{
        e.preventDefault();
        console.log(this.state.fname,this.state.lname);
    }  
  render() {
    return (
      <div style={{textAlign:"center",marginTop:"50px"}}>
            <form action="">
                <input type="text" name="fname" value={this.state.fname}  onChange={this.onHandleChange}/>
                <input type="text" name="lname" value={this.state.lname}  onChange={this.onHandleChange}/>
               
                <button onClick={this.onHandleClick}>click</button>
            </form>  
      </div>
      )}}
