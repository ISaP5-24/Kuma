import React from 'react';

const UpgradeButton = ({ onUpgrade, upgradeCost }) => {
  return (
    <button onClick={onUpgrade}>
      Upgrade (Cost: {upgradeCost} points)
    </button>
  );
};

export default UpgradeButton;
