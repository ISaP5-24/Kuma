import { useState } from 'react';
import Homo1 from './assets/Homa1.svg';
import './App.css';

function App() {
  function upgrade(){

  }
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [pointsPerClick, setPointsPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(100);

  const handleClick = () => {
    setCount(count + pointsPerClick);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  };

  const handleUpgrade = () => {
    if (count >= upgradeCost) {
      setCount(count - upgradeCost);
      setPointsPerClick(pointsPerClick + 1);
      setUpgradeCost(upgradeCost * 2);
    } else alert('Not enough points!');
  };

  return (
    <>
      <h1>Хомякликер</h1>
      <div className="card">

        <div className="scorePL">Очков за клик: {pointsPerClick}</div>

        <button onClick={handleClick} style={{ 
          transform: isClicked ? 'scale(0.9)' : 'scale(1)', 
          transition: 'transform 0.3s ease', 
          border: 'none', 
          cursor: 'pointer', 
          backgroundColor: 'transparent', 
          padding: 0 
          }}>

          <img src={Homo1} alt="Homo" style={{ 
            width: '100px', 
            height: '100px', 
            display: 'block' 
            }} />
        </button>

        <p className="score">Счёт: {count}</p>

        <button onClick={handleUpgrade} disabled={count < upgradeCost} style={{ 
          marginTop: '10px', 
          padding: '10px 20px', 
          borderRadius: '8px', 
          border: 'none', 
          backgroundColor: count >= upgradeCost ? '#f4a226' : '#ccc', color: '#fff', cursor: count >= upgradeCost ? 'pointer' : 'not-allowed' 
          }}>

          Улучшение (+1 за клик) | Стоимость: {upgradeCost}

        </button>
      </div>

      <p>Кликай! Кликай! Кликай!</p>

    </>
  );
}

export default App;