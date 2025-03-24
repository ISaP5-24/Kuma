import React from 'react';
import Score from './Score';
import ScoreHeader from './ScoreHeader.jsx';
import ScoreButton from './ScoreButton.jsx';
import UpgradeButton from './UpgradeButton.jsx';

const ScoreBoard = ({ score, onScoreChange, pointsPerClick, onUpgrade, upgradeCost, isClicked }) => {
  return (
    <div className="scoreboard">
      <ScoreHeader />
      <Score score={score} />
      <ScoreButton onScoreChange={onScoreChange} />
      <UpgradeButton onUpgrade={onUpgrade} upgradeCost={upgradeCost} />
      {isClicked && <p>Clicked!</p>}
    </div>
  );
};

export default ScoreBoard;
