import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true)

   useEffect(() => {
    if(isFirstInput.current) {
        isFirstInput.current = search === ''
        return
    }
    if (search === "") {
      setError("No se puede buscar una pelicula sin su nombre");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }

    if (search.length < 3) {
      setError("Debe de tener mas de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return {search, updateSearch, error}
};