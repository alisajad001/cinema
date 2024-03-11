import { getMovieEndpoint } from '../utils/apiUtils';
import MoviesList from './MovieList/MoviesList';

const RenderMoviesList = ({ query, setQuery, addToFavorites }) => {
  const apiURL = getMovieEndpoint(query);

  return query && query.length > 0 ? (
    <MoviesList
      apiEndpoint={apiURL}
      title="Search result"
      setQuery={setQuery}
      query={query}
      addToFavorites={addToFavorites}
    />
  ) : (
    <>
      <MoviesList
        apiEndpoint="trending/movie/day?"
        title="Trending"
        addToFavorites={addToFavorites}
      />
      <MoviesList
        apiEndpoint="movie/popular?"
        title="Popular"
        addToFavorites={addToFavorites}
      />
    </>
  );
};

export default RenderMoviesList;
