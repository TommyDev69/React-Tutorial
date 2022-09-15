import React, {useState} from 'react';
import './App.css';
import FinalResult from './Development/FinalResult';
import Heading from './Development/Heading';
import ParentBody from './Development/ParentBody';

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  return(
    <div className="App">
      <Heading />

      {showFinalResults ? (
        <FinalResult className = "final-result" />
      ):( 
          <ParentBody className = "design" />
      )}
    </div>
  );
}

export default App;
