const ElectionStats = ({
  democratVotes,
  republicanVotes,
  independentVotes,
}) => {
  return (
    <div className="vote-statistics">
      <h2>Vote Stats</h2>

      {democratVotes + republicanVotes + independentVotes === 0 ? (
        <p className="error">No data yet</p>
      ) : (
        <div>
          <p>
            Total Votes: {democratVotes + republicanVotes + independentVotes}
          </p>
          <p>
            Democrats: {democratVotes} (
            {Math.round(
              (democratVotes /
                (democratVotes + republicanVotes + independentVotes)) *
                100
            )}
            %)
          </p>
          <p>
            Republicans:{republicanVotes} (
            {Math.round(
              (republicanVotes /
                (democratVotes + republicanVotes + independentVotes)) *
                100
            )}
            %)
          </p>
          <p>
            Republicans:{independentVotes} (
            {Math.round(
              (independentVotes /
                (democratVotes + republicanVotes + independentVotes)) *
                100
            )}
            %)
          </p>
        </div>
      )}
    </div>
  );
};

export default ElectionStats;
