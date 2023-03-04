import { React, useEffect } from "react";
import "./App.css";

//20849a0e

const API_URL = "https://www.omdbapi.com?apikey=20849a0e";

const movie1 = {
  Title: "Hope Springs Eternal: A Look Back at 'The Shawshank Redemption'",
  Year: "2004",
  imdbID: "tt0443041",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("The Shawshank Redemption");
  }, []);
  return (
    <div className="App">
      <h1>Movies We Love</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value="Batman"
          onChange={() => {}}
        />
        <button onClick={() => {}}>Search</button>

        <div className="container">
            <div className="movie">
                <p>{movie1.Year}</p>
            

            <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/150'} alt="poster" />
            </div>

            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
            </div>
            
        </div>
      </div>

 
    </div>
  );
};

export default App;
