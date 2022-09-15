import React from 'react'

function FinalResult() {
  return React.createElement(
    'div',{class : 'final-result'}, null, React.createElement("h1", null, 'Final Result'),
    <h2>
        1 out of 5 correct - (20%)
    </h2> ,
        <button>Resart game </button>

  )
}

export default FinalResult