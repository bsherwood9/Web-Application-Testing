//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

export const addTouchdown = currentScore => {
  return currentScore + 7;
};

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [hit, setHit] = useState(false);
  const [foul, setFoul] = useState(false);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    if (balls > 4) {
      setBalls(0);
    }
    if (strikes > 3) {
      setStrikes(0);
    }
    if (hit) {
      setStrikes(0);
      setBalls(0);
      setHit(false);
      setFoul(false);
    }
    if (foul && strikes < 2) {
      setStrikes(strikes + 1);
      setFoul(false);
    }
  }, [hit, balls, strikes, foul]);
  const addAFoul = () => {
    setFoul(true);
    console.log(foul, strikes);
  };
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="ball">
          <h3 className="ball__title">Balls</h3>
          <div className="ball__value">{balls}</div>
        </div>
        <div className="strikes">
          <h3 className="strikes__title">Strikes</h3>
          <div className="Strikes__value">{strikes}</div>
        </div>
      </section>
      <section className="buttons">
        <div className="gameButtons">
          <button
            onClick={() => {
              setBalls(balls + 1);
              setHit(false);
            }}
            className="gameButtons__changeQuarter"
          >
            Add Ball
          </button>
          <button
            onClick={() => {
              setStrikes(strikes + 1);
              setHit(false);
            }}
            className="gameButtons__changeQuarter"
          >
            Add Strikes
          </button>
          <button
            onClick={() => {
              setHit(true);
              console.log(hit, strikes);
            }}
            className="gameButtons__changeQuarter"
          >
            Hit
          </button>
          <button onClick={addAFoul} className="gameButtons__changeQuarter">
            Foul Ball
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
