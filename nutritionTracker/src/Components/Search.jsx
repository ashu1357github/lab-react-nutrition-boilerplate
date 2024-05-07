import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
    <div id="search">
        <input type="text" placeholder='Enter Something' onChange={(e)=>this.props.handleSearch(e)} />
    </div>
    )
  }
}