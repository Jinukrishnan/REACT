import React, { Component,PureComponent } from 'react'

export default class Maps extends PureComponent {
    state={
        score:5,
        data:[
            {
                id:1,
                name:"amal",
                age:20
            },  {
                id:2,
                name:"alan",
                age:21
            },
            {
                id:3,
                name:"avin",
                age:24
            },
            {
                id:4,
                name:"askash",
                age:23
            }

        ]
    }




    componentDidMount(){
        // console.log("Running");
        alert();
    }
    incrementScore=()=>{
        this.setState({score:15})
    }
  render() {
    console.log(this.state.score);
    return (
      <div>
        <button onClick={this.incrementScore}>asd</button>
        <ul>
            {
                this.state.data.map((dt,i)=>{
                   return(<li key={i}>{dt.id}-{dt.name}-{dt.age}</li>) 
                })
            }
        </ul>
      </div>
    )
  }
}
