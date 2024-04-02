import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;

    if (showCounter) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1.0);
      }, 1000);
    } else {
      console.log(`interval before clear ${intervalId}`);
      clearInterval(intervalId);
      console.log(`interval after clear ${intervalId}`);
    }

    console.log(`Just before return ${intervalId}`);

    return () => clearInterval(intervalId);
  }, [showCounter]);

  const handleShowCounter = () => {
    setShowCounter((prev) => !prev);
    setCount(0);
  };

  return (
    <div className="container">
      <h2>{showCounter && <div>Counter: {count}</div>}</h2>
      <button onClick={handleShowCounter}>
        {showCounter ? "Hide" : "Show"}
      </button>
      <br />
    </div>
  );
}

export default App;
