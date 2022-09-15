import React from 'react'
import ShowList from './ShowList'

function Unordered() {
  
    const listItem = [
      {
        options : [
          
          {id : 0, text : 'Lagos', isCorrect : false},
          {id : 1, text : 'Abuja', isCorrect : true},
          {id : 2, text : 'Port Harcourt', isCorrect : false},
          {id : 3, text : 'Gakki ABuja', isCorrect : false},

        ]
      }
      
    ]
    const Result =  <ShowList  bring = {listItem} />
  return (
    <div>
       {Result}
    </div>
  )
}

export default Unordered

// listItem[options]map.(option)