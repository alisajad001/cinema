import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MovieCastDetailsHeader from './MovieCastDetailsHeader';

const MovieCastDetails = () => {
  const { castId } = useParams();

  const personAPI = `https://api.themoviedb.org/3/person/${castId}?`;

  const knownForAPI = `https://api.themoviedb.org/3/person/${castId}/movie_credits?`;

  const { data } = useFetch(personAPI);
  const { data: knownFor } = useFetch(knownForAPI);

  return (
    <div>
      {/* {isLoading && 'Loading...'} */}
      {/* {isError && error.message} */}

      {data && <MovieCastDetailsHeader personData={data} knownFor={knownFor} />}
    </div>
  );
};

export default MovieCastDetails;
