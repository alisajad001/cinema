import Movie from './Movie';
import useFetch from '../hooks/useFetch';

const MoviesList = ({ apiEndpoint, title, setQuery }) => {
  const apiURL = `https://api.themoviedb.org/3/${apiEndpoint}`;
  const { data, isLoading, isError, error } = useFetch(apiURL);
  return (
    <section className="pt-2">
      <h2 className="text-xl text-white font-semibold">
        {title} <span className="text-primary">Movies</span>
      </h2>

      <div className="flex gap-2 overflow-x-scroll py-5">
        {isLoading && <p>Loading...</p>}

        {isError && <p>Error: {error.message}</p>}

        {data &&
          data.results.map((movie) => (
            <Movie key={movie.id} {...movie} setQuery={setQuery} />
          ))}
      </div>
    </section>
  );
};

export default MoviesList;
