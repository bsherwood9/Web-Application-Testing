import React from "react";

const Dashboard = ({
  balls,
  setBalls,
  setStrikes,
  strikes,
  setHit,
  hit,
  addAFoul
}) => {
  return (
    <section>
      <div>
        <button
          data-testid="ballButton"
          onClick={() => {
            setBalls(balls + 1);
            setHit(false);
          }}
        >
          Add Ball
        </button>
        <button
          data-testid="strikesButton"
          onClick={() => {
            setStrikes(strikes + 1);
            setHit(false);
          }}
        >
          Add Strikes
        </button>
        <button
          data-testid="hitButton"
          onClick={() => {
            setHit(true);
            console.log(hit, strikes);
          }}
        >
          Hit
        </button>
        <button data-testid="foulButton" onClick={addAFoul}>
          Foul Ball
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
