import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MovieCastDetailsHeader from './MovieCastDetailsHeader';
import Loader from './Loader';
import { getPersonById } from '../utils/apiUtils';

const MovieCastDetails = () => {
  const { castId } = useParams();

  const personAPI = getPersonById(castId);

  const knownForAPI = `https://api.themoviedb.org/3/person/${castId}/movie_credits?`;

  const { data, isLoading } = useFetch(personAPI);
  const { data: knownFor } = useFetch(knownForAPI);

  return (
    <div>
      {/* Loading */}
      {isLoading && (
        <Loader className="h-screen flex items-center justify-center" />
      )}

      {data && <MovieCastDetailsHeader personData={data} knownFor={knownFor} />}
    </div>
  );
};

export default MovieCastDetails;
