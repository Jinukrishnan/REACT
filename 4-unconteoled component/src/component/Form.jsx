import React, { Component } from 'react'
export default class Form extends Component {
   constructor(props){
    super(props)
    this.inputf=React.createRef()
    this.inputl=React.createRef()
   }

     
    onHandleClick=(e)=>{
        e.preventDefault();
        console.log(this.inputf.value);
        console.log(this.inputl.value);
    }  
  render() {
    return (
      <div style={{textAlign:"center",marginTop:"50px"}}>
            <form action="">
                <input type="text" ref={input=>this.inputf=input} name="fname"/>
                <input type="text" ref={input=>this.inputl=input} name="lname"/>
               
                <button onClick={this.onHandleClick}>click</button>
            </form>  
      </div>
      )}
    }
