import Movie from './Movie';
import useFetch from './hooks/useFetch';

const MoviesList = ({ apiEndpoint, title }) => {
  const apiURL = `https://api.themoviedb.org/3/${apiEndpoint}api_key=${
    import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  }`;
  const { data, loading, error } = useFetch(apiURL);
  return (
    <section className="pt-2">
      <h2 className="text-xl text-white font-semibold">
        {title} <span className="text-primary">Movies</span>
      </h2>

      <div className="flex gap-4 overflow-x-scroll py-5">
        {loading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {data &&
          data.results.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </section>
  );
};

export default MoviesList;
