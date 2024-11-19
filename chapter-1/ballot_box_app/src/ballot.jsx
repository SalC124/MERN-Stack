import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";

const Ballot = ({
  democratVotes,
  setDemocratVotes,
  republicanVotes,
  setRepublicanVotes,
  independentVotes,
  setIndependentVotes,
}) => {
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
    </div>
  );
};

export default Ballot;
