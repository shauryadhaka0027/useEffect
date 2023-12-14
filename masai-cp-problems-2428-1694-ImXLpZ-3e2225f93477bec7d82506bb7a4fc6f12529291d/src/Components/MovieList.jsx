import React from "react";

const MovieList = () => {
  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort"></select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter"></select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      <div data-testid="movie-container">
        {/* render all the movies data with the help of MovieCard component here */}
      </div>
    </div>
  );
};

export default MovieList;
