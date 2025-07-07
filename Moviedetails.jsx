import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch('https://jsonfakery.com/movies/paginated');
        const data = await res.json();
        console.log('Fetched Movies:', data.data);

        const found = data.data.find((m) => m.id.toString() === id);
        console.log('Found Movie:', found); 
        setMovie(found || null);
      } catch (err) {
        console.error('Failed to fetch:', err);
        setMovie(null);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p style={{ color: 'red' }}>Movie not found</p>;

  return (
    <div style={{ color: 'white', background: '#111', padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.original_title} style={{ width: '300px' }} />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;



   
