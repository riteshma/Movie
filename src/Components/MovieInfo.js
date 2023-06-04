import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const [movies, setMovies] = useState({});
  console.log(movies)
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.clone().json();
      setMovies(data);
    }
    getProduct();
  }, []);


  return (
    <>
    Object.keys{movies}
    
      
    
      
    </>
  )
}

export default MovieInfo