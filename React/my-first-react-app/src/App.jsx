import React, { use, useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";

// API Parts
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  // Manage state for different instances
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Optimizing search with debounce
  // Debounces search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms :
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");

    // First try to fetch api
    try {
      // (ternary) - if query exists
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      // Throw object if response not ok
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      // Parsing data into json object
      const data = await response.json();

      if (data.response == "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      // if data.response != false:
      // Populates the movie list
      setMovieList(data.results || []);
    } catch (error) {
      // If error occures when fetching
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later");
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  // API - Application Programming Interface
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  // Whenever the searchTerm value changes, the fetchMovies function will be recalled with that new searchTerm due to the dependency being searchTerm

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          {/* Import Search Component  */}
          {/* State Fields can be passed as props  */}
          {/* In the following line, we pass the setSearchTerm function but do not call it  */}
          {/* Props are like arguments passed to the component  */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {/* if isLoading (true) p - loading, else if errorMessage p - error */}
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500"> {errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
