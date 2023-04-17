import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // "https://api.themoviedb.org/3/discover/tv?api_key=a8e293a39b2e2030b811851adc69941e&with_networks=213"

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]); // if [] run once when the row loads, and dont run again

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
