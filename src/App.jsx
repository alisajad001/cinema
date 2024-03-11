import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieDetailsSection from './components/MovieDetailsSection';
import NotFoundPage from './components/NotFoundPage';
import RenderMoviesList from './components/RenderMovieList';
import MovieCastDetails from './components/MovieCastDetails';
import Favorites from './sections/Favorites';

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = useState('');

  // Favorite Movies store in localstorage
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Add a movie to the favoritesMovies
  const addToFavorites = (movie) => {
    setFavoriteMovies((movies) => [...movies, movie]);
  };

  // Adds the movie when an add click is triggred
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home query={query} setQuery={setQuery}>
              <RenderMoviesList
                query={query}
                setQuery={setQuery}
                addToFavorites={addToFavorites}
              />
            </Home>
          }
        />

        <Route path="movie/:movieId" element={<MovieDetailsSection />} />
        <Route
          path="favorites"
          element={<Favorites favoriteMovies={favoriteMovies} />}
        />
        <Route path="cast/:castId" element={<MovieCastDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
