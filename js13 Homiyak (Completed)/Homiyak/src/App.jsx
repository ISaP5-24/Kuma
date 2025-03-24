import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import './App.css';
import { handleClick, handleUpgrade, score, count } from './Engine.js';

function App() {
  const [count] = useState(0);
  const [isClicked] = useState(false);
  const [pointsPerClick] = useState(1);
  const [upgradeCost] = useState(100);





  return (
    <>
      <h1>Homiyak</h1>
      <ScoreBoard 
        score={count} 
        onScoreChange={() => handleClick()} 
        pointsPerClick={pointsPerClick} 
        onUpgrade={() => handleUpgrade()} 
        upgradeCost={upgradeCost} 
        isClicked={isClicked} 
      />
      <p>Click on Hamster</p>
    </>
  );
}

export default App;