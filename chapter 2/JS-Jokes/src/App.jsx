import { useState } from "react";
import jokes from "./components/jokesList";

const App = () => {
  const [jokeNum, setJokeNum] = useState(0);
  // Use a map to store likes for each joke
  const [jokeLikes, setJokeLikes] = useState(new Map());

  // Get the number of likes for the current joke
  // || 0 makes sure that if there is no value, it still shows 0
  const currentLikes = jokeLikes.get(jokeNum) || 0;

  const handleLikeClick = () => {
    // Increment the like count for the current joke in the map
    setJokeLikes(prevLikes => {
      const newLikes = new Map(prevLikes);
      newLikes.set(jokeNum, (newLikes.get(jokeNum) || 0) + 1);
      return newLikes;
    });
  };

  return (
    <div className="main">
      <h1>JavaScript Jokes</h1>
      <p>{jokes[jokeNum].joke}</p>
      <button onClick={handleLikeClick}>
        Likes: {currentLikes} 
      </button>{" "}
      <button
        onClick={() =>
          setJokeNum(() => Math.floor(Math.random() * jokes.length))
        }
      >
        Next Joke
      </button>
    </div>
  );
};

export default App;
