import React, { Component } from 'react'
import List from './List'

export default class Foodbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }
handleCount=(value)=>{ 
  this.setState({count:value})
}
handleTotal=()=>{
  this.setState({total:this.state.count*this.props.food.cal})

}
handleReset=()=>{
  this.setState({
  count:0,
  total:0
})

}
  render() {
    return (
      <>
      <div id="foodbox">
        <div>
        <img src={this.props.food.img} alt="" />
        <h1>{this.props.food.name}</h1>
        <p>{this.props.food.cal}</p>
        <div>
        <input type="number" min={1} value={this.state.count} onChange={(e)=>this.handleCount(e.target.value)} />
        <button onClick={this.handleTotal}>ADD</button>
        <List count={this.state.count} name={this.props.food.name} total={this.state.total} handleReset={this.handleReset}/>
      </div>
        </div>
        
      </div>


      </>
    )
  }
}