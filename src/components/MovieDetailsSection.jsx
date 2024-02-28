import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MovieDetailsHeader from './MovieDetailsHeader';
import MovieCastsList from './MovieCastsList';

const MovieDetailsSection = () => {
  const { id } = useParams();

  const apiURL = `https://api.themoviedb.org/3/movie/${id}?`;

  const apiCasts = `https://api.themoviedb.org/3/movie/${id}/credits?`;

  const { data, loading, error } = useFetch(apiURL);
  const {
    data: casts,
    loading: castLoading,
    error: castError,
  } = useFetch(apiCasts);

  return (
    <section className="h-auto text-white">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="w-full flex flex-col">
          {/* Header */}
          <MovieDetailsHeader data={data} />

          {/* Cast */}
          <MovieCastsList
            casts={casts}
            castLoading={castLoading}
            castError={castError}
            data={data}
          />
        </div>
      )}
    </section>
  );
};

export default MovieDetailsSection;
