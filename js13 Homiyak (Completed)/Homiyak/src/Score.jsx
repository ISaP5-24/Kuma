import React from 'react';

const Score = ({ score }) => {
  return (
    <div className="score">
      <h2>Current Score: <span id="scoreContain">{score}</span></h2>
    </div>
  );
};

export default Score;
