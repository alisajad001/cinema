import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MovieDetailsHeader from './MovieDetailsHeader';
import MovieCastsList from '../MovieCast/MovieCastsList';
import Loader from '../Loader';
import { getMovieById, getMovieCasts } from '../../utils/apiUtils';

const MovieDetailsSection = () => {
  const { movieId } = useParams();

  const apiURL = getMovieById(movieId);

  const apiCasts = getMovieCasts(movieId);

  const { data, isLoading } = useFetch(apiURL);

  const { data: casts } = useFetch(apiCasts);

  return (
    <section className="h-auto text-white">
      {isLoading && (
        <Loader className="h-screen flex items-center justify-center" />
      )}
      {data && (
        <div className="w-full flex flex-col">
          {/* Header */}
          <MovieDetailsHeader data={data} />

          {/* Cast */}
          <MovieCastsList casts={casts} data={data} />
        </div>
      )}
    </section>
  );
};

export default MovieDetailsSection;
