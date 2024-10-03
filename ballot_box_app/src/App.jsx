import Ballot from "./ballot.jsx";
import ElectionStats from "./electionStats.jsx";

import "./App.css";

import { useState } from "react";

const App = () => {
  const [democratVotes, setDemocratVotes] = useState(0);
  const [republicanVotes, setRepublicanVotes] = useState(0);
  const [independentVotes, setIndependentVotes] = useState(0);

  return (
    <>
      <Ballot
        democratVotes={democratVotes}
        setDemocratVotes={setDemocratVotes}
        republicanVotes={republicanVotes}
        setRepublicanVotes={setRepublicanVotes}
        independentVotes={independentVotes}
        setIndependentVotes={setIndependentVotes}
      />
      <ElectionStats
        democratVotes={democratVotes}
        republicanVotes={republicanVotes}
        independentVotes={independentVotes}
      />
    </>
  );
};

export default App;
