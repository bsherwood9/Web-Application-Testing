import React from "react";

const Display = ({ balls, strikes }) => {
  return (
    <section className="scoreboard">
      <div>
        <h3>Balls</h3>
        <div data-testid="ballValue">{balls}</div>
      </div>
      <div>
        <h3>Strikes</h3>
        <div data-testid="strikesValue">{strikes}</div>
      </div>
    </section>
  );
};

export default Display;
