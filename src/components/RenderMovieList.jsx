import { getMovieEndpoint } from '../utils/apiUtils';
import MoviesList from './MoviesList';

const RenderMoviesList = ({ query, setQuery }) => {
  const apiURL = getMovieEndpoint(query);

  return query && query.length > 0 ? (
    <MoviesList
      apiEndpoint={apiURL}
      title="Search result"
      setQuery={setQuery}
    />
  ) : (
    <>
      <MoviesList apiEndpoint="trending/movie/week?" title="Trending" />
      <MoviesList apiEndpoint="movie/top_rated?" title="Top Rated" />
    </>
  );
};

export default RenderMoviesList;
