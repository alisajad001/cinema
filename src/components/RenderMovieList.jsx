import { getApiURL } from '../utils/apiUtils';
import MoviesList from './MoviesList';

const RenderMoviesList = ({ query }) => {
  const apiURL = getApiURL(query);

  return query && query.length > 0 ? (
    <MoviesList apiEndpoint={apiURL} title="Search result" />
  ) : (
    <>
      <MoviesList apiEndpoint="trending/movie/week?" title="Trending" />
      <MoviesList apiEndpoint="movie/popular?" title="Popular" />
    </>
  );
};

export default RenderMoviesList;
