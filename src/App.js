import "./App.css";
import { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      cover: "./images/DisneyTwentyThree-Cover.jpg",
      name: "movie1",
      source: "./videos/DSCF0310.mp4",
    },
    {
      id: 2,
      cover: "./images/images(1).jfif",
      source: "./videos/4K_7.mp4",
      name: "movie32",
    },
    {
      id: 3,
      cover: "./images/images.jfif",
      name: "movie3",
      source: "./videos/DSCF0310.mp4",
    },
  ]);

  document.querySelector(".Search");

  function search(e) {
    let input = e.target.value;

    movieList.forEach((movie) => {
      !movie.name.includes(input)
        ? (document.querySelector(`[data-id="${movie.id}"]`).style.display =
            "none")
        : (document.querySelector(`[data-id="${movie.id}"]`).style.display =
            "");
    });
  }

  return (
    <div className="Main">
      <div className="App">
        <h1>ADD A MOVIE</h1>
        <div className="Search">
          <input
            type="search"
            onChange={search}
            placeholder="Movie Title"
          ></input>
        </div>

        <div className="MovieList">
          {movieList.length > 0 ? (
            movieList.map((movie) => (
              // Component
              <Movie
                id={movie.id}
                name={movie.name}
                source={movie.source}
                cover={movie.cover}
              ></Movie>
            ))
          ) : (
            <div className="EmptyList">
              <p>Your movie list is empty lets try to fill it up... </p>
              <p>
                Write your favorite movie name then click the add button and
                magic will happen...😉
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="AddBtn">
        <img src="./images/floatinBtn.svg" />
      </div>
    </div>
  );
}

export default App;
