import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const movies = [
  {
    id: 1,
    title: "The Godfather (1972)",
    watchlist: true,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    watchlist: false,
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    watchlist: true,
  },
];

createRoot(document.getElementById("root")).render(<App movies={movies} />);
