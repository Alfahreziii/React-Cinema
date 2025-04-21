import MovieCard from './MovieCard';

const groupMoviesByCategory = (movies) => {
    return movies.reduce((acc, movie) => {
      const category = movie.category || "Lainnya";
      if (!acc[category]) acc[category] = [];
      acc[category].push(movie);
      return acc;
    }, {});
  };
    
  const MovieSlider = ({ movies, selectedGenre }) => {

  const filteredMovies = selectedGenre
  ? movies.filter((movie) => movie.genres.includes(selectedGenre))
  : movies;

  const groupedMovies = groupMoviesByCategory(filteredMovies);


  return (
    <>
      <div class="px-16 max-[780px]:px-8 max-[480px]:px-5 relative -mt-16">
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
      </div>
    </>
  );
};

export default MovieSlider;
