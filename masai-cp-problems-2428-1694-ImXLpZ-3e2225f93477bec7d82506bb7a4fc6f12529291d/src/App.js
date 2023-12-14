import React from "react";

const App = () => {
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button data-testid="toggle-btn"></button>
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
      </div>
    </div>
  );
};

export default App;
