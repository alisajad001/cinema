// Get Movie by query string
const getMovieEndpoint = (query) => `search/movie?query=${query}&`;

// Get Movie by ID
const getMovieById = (id) => `https://api.themoviedb.org/3/movie/${id}?`;

// Get Movie Casts
const getMovieCasts = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?`;

// Get Person by ID
const getPersonById = (id) => `https://api.themoviedb.org/3/person/${id}?`;

// Get Person know for movies by ID
const getKnowForByCastId = (id) =>
  `https://api.themoviedb.org/3/person/${id}/movie_credits?`;

export {
  getMovieEndpoint,
  getMovieById,
  getMovieCasts,
  getPersonById,
  getKnowForByCastId,
};
