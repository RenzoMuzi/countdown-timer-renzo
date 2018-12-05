import React, { Component } from 'react'
import Component2 from './component2'

class Component3 extends Component {
  render (){
    return (
      <div>
        <h1>I'm the second most usefull component</h1>
        <h2>the component below is imported</h2>
        <Component2></Component2>
      </div>
    )
  }
}

export default Component3