import React, { Component } from 'react'

class Heading extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        scored : 0
       


      }
      // this.newSetup = this.newSetup.bind(this)
    }

    // newSetup(){
    //   this.state.scored = this.state.scored + 1
    // }

    // newSetup(){
    //   this.setState(
    //     {
    //        scored : this.state.scored + 1 
    //     }, 
        
    //     () => {
    //       console.log('Callback value', this.state.scored)
    //     }
    //   )
    // }
  render() {

    return (
      <div>
        <h1>NIGERIA QUIZ</h1>
        {/* <h4>Current Score: {this.s</h4> */}
        {/* onClick={() => this.newSetup} */}
        <h4>Current Score:{this.state.scored}</h4>
        
        {/* <h4 onClick={(this.newSetup}>Current Score:{this.state.scored}</h4> */}
      </div>
    )
  }
}

export default Heading