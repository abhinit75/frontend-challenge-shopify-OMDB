import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import { SearchBox } from "./SearchBox";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  

  const getMovieRequest = async (query) => {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=8e8b9514&`

    const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
          setResults(responseJson.Search);
        } else {
          setResults([]);
        }
        }
  useEffect(() => {
    getMovieRequest(query);
  }, [query]);


  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <SearchBox searchValue={query} setSearchValue={setQuery} />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          
        </div>
      </div>
    </div>
  );
};