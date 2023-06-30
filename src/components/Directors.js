import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((director) => {
          return (
            <div key={director.name}>
              <p>{director.name}</p>
              <li>{director.movies}</li>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Directors;
