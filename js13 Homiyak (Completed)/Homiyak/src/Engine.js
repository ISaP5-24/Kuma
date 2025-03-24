
export let count = 1;
export let score = 0;
const upgradeCost = 100;

export const handleClick = () => {
    score += count;
    document.getElementById('scoreContain').innerText = Number(score);
    /*setCount(count + pointsPerClick);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);*/
  };


 export const handleUpgrade = () => {
    if (score >= upgradeCost) {
      //setCount(count - upgradeCost);
      score -= upgradeCost;
      count += 1;
      document.getElementById('scoreContain').innerText = Number(score);

      //setPointsPerClick(pointsPerClick + 1);
      setUpgradeCost(upgradeCost * 2);
    } else {
      alert('Not enough points!');
    }
  };


  setInterval(() => {
    handleClick()
  }, 100)