import React from "react";
import { movies } from "../data";

function Movies() {

    return (
      <div>
        <h1>Movies Page</h1>
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.title}>
                <p>{movie.title}</p>
                <p>{movie.time}</p>
                <li>{movie.genres}</li>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Movies;
