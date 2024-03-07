// Get Movie by query string
const getMovieEndpoint = (query) => `search/movie?query=${query}&`;

// Get Movie by ID
const getMovieById = (id) => `https://api.themoviedb.org/3/movie/${id}?`;

// Get Movie Casts
const getMovieCasts = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?`;

export { getMovieEndpoint, getMovieById, getMovieCasts };
