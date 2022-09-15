import React, { Component } from 'react'
import Unordered from './Unordered'
import '../Development/myStyle.css'

 class ParentBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentQuestion : 0
       
    }
  }
    
  render() {
  const texter = ['What is the capital of NIGERIA? ']    
    return(
      <div className= 'design'>
        <h1>Question {this.state.currentQuestion + 1} out of 5</h1>
         

          {
            texter.map(disk =><h2 id='quest'>{disk}</h2>)
          }
        <Unordered  />
      </div>
    )
  }
}

export default ParentBody