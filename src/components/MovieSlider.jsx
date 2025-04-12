import React from 'react';
import MovieCard from './MovieCard';

const groupMoviesByCategory = (movies) => {
    return movies.reduce((acc, movie) => {
      const category = movie.category || "Lainnya";
      if (!acc[category]) acc[category] = [];
      acc[category].push(movie);
      return acc;
    }, {});
  };

const MovieSlider = ({ movies }) => {
  const groupedMovies = groupMoviesByCategory(movies);

  return (
    <>
      {Object.entries(groupedMovies).map(([category, grouped]) => (
        <div key={category} className="mt-20">
          <h2 className="text-white text-2xl font-lato font-bold mb-4">{category}</h2>
          <div className="flex gap-4 overflow-x-auto">
            {grouped.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieSlider;
