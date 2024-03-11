import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MovieCastDetailsHeader from '../MovieCast/MovieCastDetailsHeader';
import Loader from '../Loader';
import { getKnowForByCastId, getPersonById } from '../../utils/apiUtils';
import { ToastContainer } from 'react-toastify';

const MovieCastDetails = ({ addToFavorites }) => {
  const { castId } = useParams();

  const personAPI = getPersonById(castId);

  const knownForAPI = getKnowForByCastId(castId);

  const { data, isLoading } = useFetch(personAPI);
  const { data: knownFor } = useFetch(knownForAPI);

  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      {/* Loading */}
      {isLoading && (
        <Loader className="h-screen flex items-center justify-center" />
      )}

      {data && (
        <MovieCastDetailsHeader
          personData={data}
          knownFor={knownFor}
          addToFavorites={addToFavorites}
        />
      )}
    </div>
  );
};

export default MovieCastDetails;
