import React, { Component } from 'react'
export default class Counter extends Component {
     state={
        count:0
    }
    countPlus=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    countMinus=()=>{
        this.setState({
            count:this.state.count-1
        })}
  render() {
    return (
      <div style={{textAlign:"center",paddingTop:"50px"}}>
   <h1>Counter</h1>
   <h2 style={{margin:"20px 20px"}}>{this.state.count}</h2>
   <button style={{padding:"10px",margin:"0px 5px"}} onClick={this.countPlus}>+</button>
   <button style={{padding:"10px",margin:"0px 5px"}} onClick={this.countMinus}>-</button>
      </div>
    )}
}
