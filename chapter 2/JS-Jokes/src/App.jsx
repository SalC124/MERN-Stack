import { useState } from "react";
import jokes from "./components/jokesList";

const App = () => {
  const [jokeNum, setJokeNum] = useState(0);
  const [jokeLikes, setJokeLikes] = useState(0);

  return (
    <div className="main">
      <h1>JavaScript Jokes</h1>
      {/* Display Joke */}
      <p>{jokes[jokeNum].joke}</p>
      {/* Increase likes on that joke */}
      <button onClick={() => setJokeLikes((jokeLikes) => jokeLikes + 1)}>
        Likes: {jokes[jokeNum].likes}
      </button>{" "}
      {/* Choose a random joke */}
      <button
        onClick={() =>
          setJokeNum((jokeNum) => Math.floor(Math.random() * jokes.length))
        }
      >
        Next Joke
      </button>
    </div>
  );
};

export default App;
