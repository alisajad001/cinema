import TrendingMovie from './TrendingMovie';
import useFetch from './hooks/useFetch';

const TrendingMovies = () => {
  const apiURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${
    import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  }`;
  const { data, loading, error } = useFetch(apiURL);

  return (
    <section className="pt-5">
      <h2 className="text-xl sm:text-3xl text-white text-center font-bold">
        Trending <span className="text-primary">Movies</span>
      </h2>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
        {loading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {data &&
          data.results.map((movie) => (
            <TrendingMovie key={movie.id} {...movie} />
          ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
