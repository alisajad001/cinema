import Movie from './Movie';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader';

const MoviesList = ({
  apiEndpoint,
  title,
  query,
  setQuery,
  addToFavorites,
}) => {
  const apiURL = `https://api.themoviedb.org/3/${apiEndpoint}`;
  const { data, isLoading, isError, error } = useFetch(apiURL);

  return (
    <section className="pt-2">
      <h2 className="text-xl text-white font-semibold">
        {title} <span className="text-primary">Movies</span>
      </h2>

      {/* Loading */}
      {isLoading && <Loader />}
      {isError && <p>Error: {error.message}</p>}

      <div className="flex gap-2 overflow-x-scroll py-5">
        {data &&
          data.results.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
              id={movie.id}
              setQuery={setQuery}
              query={query}
              className="w-32 sm:w-52"
              addToFavorites={addToFavorites}
            />
          ))}
      </div>
    </section>
  );
};

export default MoviesList;
