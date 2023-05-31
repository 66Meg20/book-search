import "./App.css";
import Books from "./Books.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Books />
        <footer>
          This Project was coded by Megan Jackson and is{" "}
          <a
            href="https://github.com/66Meg20/book-search"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
