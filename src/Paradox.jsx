import { useState, useEffect } from "react";

const AchillesAndTortoise = () => {
  const [achillesProgress, setAchillesProgress] = useState(0);
  const [tortoiseProgress, setTortoiseProgress] = useState(50); 
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setAchillesProgress((prevAchilles) => {
          const remainingDistance = tortoiseProgress - prevAchilles;

          if (remainingDistance <= 0.1) {
            clearInterval(id);
            setIsRunning(false);
            window.alert("numbers get really big now...");
            return prevAchilles;
          }

          return prevAchilles + remainingDistance / 2;
        });

        setTortoiseProgress((prevTortoise) => Math.min(prevTortoise + 2, 100));
      }, 500);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [isRunning, tortoiseProgress]);


  const startSimulation = () => setIsRunning(true);
  const resetSimulation = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setAchillesProgress(0);
    setTortoiseProgress(50);
  };

  return (
    <div>
      <h1>Achilles and Tortoise Paradox</h1>
      <div>
        <h3>Tortoise</h3>
        <progress value={tortoiseProgress} max="100"></progress>
        <p>{tortoiseProgress} distance</p>
      </div>
      <div>
        <h3>Achilles</h3>
        <progress value={achillesProgress} max="100"></progress>
        <p>{achillesProgress} distance</p>
      </div>
      <div>
        <button onClick={startSimulation} disabled={isRunning}>
          Start Simulation
        </button>
        <button onClick={resetSimulation}>Reset</button>
      </div>
    </div>
  );
};

export default AchillesAndTortoise;
