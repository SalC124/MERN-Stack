import Movie from "./components/Movie.jsx";

import { useState } from "react";

const App = ({ movies }) => {
  const [movieList, setMovieList] = useState(movies);
  const [movieName, setMovieName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const filteredList = showAll
    ? movieList
    : movieList.filter((m) => m.watchList); // m gives the movies

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieObj = {
      id: Date.now(),
      title: movieName,
      watchList: false,
    };
    console.log("refresh prevented");
    movieList.concat(newMovieObj);
    console.log(movieList.concat(newMovieObj));
    setMovieName("");
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div>
      <h1>Movies App</h1>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={movieName} onChange={handleChange} />
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>Toggle Watchlist</button>
      {showAll ? <h2>Movie List</h2> : <h2>Your Watchlist</h2>}
      {filteredList.map((movie) => {
        return <Movie key={Movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
