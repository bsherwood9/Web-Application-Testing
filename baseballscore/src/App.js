//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

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
    if (strikes < 2) {
      setFoul(true);
    }
    console.log(foul, strikes);
  };
  return (
    <div>
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        setBalls={setBalls}
        balls={balls}
        setStrikes={setStrikes}
        strikes={strikes}
        addAFoul={addAFoul}
        setHit={setHit}
        hit={hit}
      />
    </div>
  );
}

export default App;
