import React from "react";

function Movie({ id, name, source, cover }) {
  return (
    <div data-id={id} className="Movie">
      <div className="bg-purple-300 Cover">
        <img className="" src={cover} />
      </div>

      <div className="Content">
        <p>{name}</p>

        <div className="StarRating">
          <img src="./images/Ratings.svg" />
        </div>

        <div>
          <div className="Watched">watched</div>
          <img src="./images/deleteBtn.svg" />
        </div>
      </div>
    </div>
  );
}

export default Movie;
