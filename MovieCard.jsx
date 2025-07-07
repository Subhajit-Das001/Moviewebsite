import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

const MovieCards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('https://jsonfakery.com/movies/paginated');
        const data = await res.json();
        setMovies(data?.data || []);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  

  return (
    <div className="movie-gallery">
      <h2>Movie Gallery</h2>
      <div className="card-container">
       {movies.map((movie, index) => (
  <Link
    to={`/movie/${movie.id}`}
    key={index}
    className="movie-link"
    onClick={() => console.log('Clicked ID:', movie.id)}
  >
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.original_title} className="movie-poster" />
      <h3>{movie.title}</h3>
    
    </div>
  </Link>
))}

      </div>
    </div>
  );
};

export default MovieCards;


