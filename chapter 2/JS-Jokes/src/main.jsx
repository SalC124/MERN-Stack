import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import jokes from "./components/jokesList.jsx";

createRoot(document.getElementById("root")).render(<App />);
