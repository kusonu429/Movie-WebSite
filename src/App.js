import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./Movies.json";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Movie-section">
        {movies.map((element , index) => {
          return (
            <Movie
              key={index}
              imdb={element.imdbID}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
