import React from "react";

// To work with the props that are passed as arguments from app.jsx
// You can use the props object
// You can destructure the props argument because it is a object
// so instead of using the 'props' as the argument
// Immediately destructre the props object like so:
// searchTerm, setSearchTerm
// Then you can use the variables instead of props.searchTerm
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          // passing the target value to setSearchTerm
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
