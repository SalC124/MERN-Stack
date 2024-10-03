import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";

import "./App.css";

import { useState } from "react";

const App = () => {
  const [democratVotes, setDemocratVotes] = useState(0);
  const [republicanVotes, setRepublicanVotes] = useState(0);
  const [independentVotes, setIndependentVotes] = useState(0);
  return (
    <div className="party-container">
      <div className="party">
        <h2>Democrats</h2>
        <div className="box blue">
          <img src={democratic} alt="Democrats" className="party-image" />
          <br />
          <button
            className="vote-button"
            onClick={() => setDemocratVotes(democratVotes + 1)}
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {democratVotes}</p>
        </div>
      </div>

      <div className="party">
        <h2>Republicans</h2>
        <div className="box red">
          <img src={republican} alt="Republicans" className="party-image" />
          <br />
          <button
            className="vote-button"
            onClick={() => setRepublicanVotes(republicanVotes + 1)}
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {republicanVotes}</p>
        </div>
      </div>

      <div className="party">
        <h2>Independent</h2>
        <div className="box yellow">
          <img src={american} alt="Independents" className="party-image" />
          <br />
          <button
            className="vote-button"
            onClick={() => setIndependentVotes(independentVotes + 1)}
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {independentVotes}</p>
        </div>
      </div>
      <br />
      <div className="vote-statistics">
        <h2>Vote Stats</h2>
        <p>Democrats: </p>
        <p>Republicans: </p>
        <p>Independent: </p>
      </div>
    </div>
  );
};

const DisplayTrack = ({ track }) => {
  return track.length === 0 ? (
    <>No Recommendations entered yet.</> // if true, do this
  ) : (
    <>{track.join("-")}</> // if false, do this
  );
};

export default App;
