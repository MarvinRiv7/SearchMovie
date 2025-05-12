import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ListOfMovies, NoMoviesResult } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";



export const App = () => {
  const [sort, setsort] = useState(false)
  const {search, updateSearch, error} = useSearch()
    const { movies, mappedMovies,getMovies, loading } = useMovies({search, sort});
  const hasMovies = movies?.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies()
  };
  
  const handleSort = () => {
    setsort(!sort)
  }
  const handleChange = (event) => {
    updateSearch(event.target.value); 
  };
 
  return (
    <div className="page">
      <header>
        <h1>Buscador de pelculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix...."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {hasMovies ? (
          <ListOfMovies movies={mappedMovies} />
        ) : (
          <NoMoviesResult />
        )}
      </main>
    </div>
  );
};
