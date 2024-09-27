import Movie from "./components/Movie.jsx";

const App = ({ movies }) => {
  // const movieTitles = movies.map((movies) => {
  //   return 3;
  // });

  // console.log("Titles: ", movieTitles);

  return (
    <div>
      <h1>Movies App</h1>
      {/* <ul>
        <li>{movies[0].title}</li>
        <li>{movies[1].title}</li>
        <li>{movies[2].title}</li>
      </ul> */}
      {movies.map((movie) => {
        return <Movie key={Movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
