import TrendingMovie from './TrendingMovie';
import movieData from '../temporaryData';

const TrendingMovies = () => {
  return (
    <section className="pt-5">
      <h2 className="text-xl sm:text-3xl text-white text-center font-bold">
        Trending <span className="text-primary">Movies</span>
      </h2>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
        {movieData.map((movie) => (
          <TrendingMovie key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
