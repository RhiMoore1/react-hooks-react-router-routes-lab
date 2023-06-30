import React from "react";
import { actors } from "../data";

function Actors() {

  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor) => {
          return(
            <div key={actor.name}>
              <p>{actor.name}</p>
              <li>{actor.movies}</li>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Actors;
