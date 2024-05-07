import './App.css'
import Foodbox from './Components/Foodbox'
import FoodData from './Components/FoodData'
import React, { Component } from 'react'
import Search from './Components/Search'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      search:"",

    }

  }
  handleSearch=(e)=>{
    this.setState({search:e.target.value})
  }

  render() {
    return (
      <div>
      <Search handleSearch={this.handleSearch} />

{
    FoodData.filter((food)=>{
      if(this.state.search===""){
        return food
      }else if(food.name.toLowerCase().includes(this.state.search)
      ){
        return food
      }
    }).map((el)=>{
      return(
      <div key={el.id}>
        <Foodbox food={el}/>
      </div>)
    })
}

      </div>
    )
  }
}

