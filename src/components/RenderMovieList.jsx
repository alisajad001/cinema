import { getMovieEndpoint } from '../utils/apiUtils';
import MoviesList from './MoviesList';

const RenderMoviesList = ({ query, setQuery }) => {
  const apiURL = getMovieEndpoint(query);

  return query && query.length > 0 ? (
    <MoviesList
      apiEndpoint={apiURL}
      title="Search result"
      setQuery={setQuery}
      query={query}
    />
  ) : (
    <>
      <MoviesList apiEndpoint="trending/movie/day?" title="Trending" />
      <MoviesList apiEndpoint="movie/popular?" title="Popular" />
    </>
  );
};

export default RenderMoviesList;
