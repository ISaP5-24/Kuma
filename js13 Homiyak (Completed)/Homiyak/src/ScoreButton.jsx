import React from 'react';
import Homo1 from './assets/Homa1.svg';

const ScoreButton = ({ onScoreChange }) => {
  return (
    <button onClick={onScoreChange}>
      <img src={Homo1} alt="Homo" style={{ 
            width: '100px', 
            height: '100px', 
            display: 'block' 
            }} />
    </button>
    
  );
};

export default ScoreButton;
