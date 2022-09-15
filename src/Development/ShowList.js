import React from 'react'

function ShowList({bring}) {
  // console.log(bring)
  return (
    <ul>
      {bring.map((list, i) => {

       return list.options.map((ele, ind) =>{
           return <li key={ind}>{ele.text}</li>
        })
        
        
      })}
        
    </ul>
  )
}

export default ShowList