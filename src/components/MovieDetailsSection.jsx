import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MovieDetailsHeader from './MovieDetailsHeader';
import MovieCastsList from './MovieCastsList';
import { getMovieById } from '../utils/apiUtils';

const MovieDetailsSection = () => {
  const { movieId } = useParams();

  const apiURL = getMovieById(movieId);

  const apiCasts = `https://api.themoviedb.org/3/movie/${movieId}/credits?`;

  const { data, isLoading, error, isError } = useFetch(apiURL);

  const {
    data: casts,
    isLoading: castLoading,
    isError: castIsError,
    error: castError,
  } = useFetch(apiCasts);

  return (
    <section className="h-auto text-white">
      {isLoading && 'Loading...'}
      {isError && error.message}
      {data && (
        <div className="w-full flex flex-col">
          {/* Header */}
          <MovieDetailsHeader data={data} isLoading={isLoading} />

          {/* Cast */}
          <MovieCastsList
            casts={casts}
            castLoading={castLoading}
            castError={castError}
            castIsError={castIsError}
            data={data}
          />
        </div>
      )}
    </section>
  );
};

export default MovieDetailsSection;
