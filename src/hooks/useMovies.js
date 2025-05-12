import withResult from "../mocks/with-result.json";
import withoutResult from "../mocks/no-result.json";
import { useRef, useState } from "react";

export const useMovies = ({search, sort}) => {
  const [responseMovies, setresponseMovies] = useState([])
  const movies = responseMovies.Search;
  const previusSearch = useRef(search)

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if(search === previusSearch.current)return
    if (search) {
      previusSearch.current = search
      //setresponseMovies(withResult)
      fetch(`https://www.omdbapi.com/?apikey=a5dc52ea&s=${search}`)
      .then(res => res.json())
      .then(json => {
        setresponseMovies(json)
      })
    } else {
      setresponseMovies(withoutResult)
    }
  };

  // const sortedMovies = sort
  // ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  return { movies, mappedMovies, getMovies};
};
