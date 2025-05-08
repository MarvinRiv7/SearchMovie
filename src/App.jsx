import "./App.css";
import responseMovies from "./mocks/with-result.json";
import withoutResult from "./mocks/no-result.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  const renderMovies = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    );
  };

  const renderNoResult = () => {
    return <p>No se encontrarron peliculas para esta busqueda</p>;
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de pelculas</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Avengers, Star Wars, The Matrix...."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>{hasMovies ? renderMovies() : renderNoResult()}</main>
    </div>
  );
}

export default App;
