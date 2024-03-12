import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieDetailsSection from './components/MovieDetails/MovieDetailsSection';
import NotFoundPage from './components/NotFoundPage';
import RenderMoviesList from './components/RenderMovieList';
import MovieCastDetails from './components/MovieCast/MovieCastDetails';
import Favorites from './sections/Favorites';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = useState('');

  // Favorite Movies store in localstorage
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Toast Message
  const [toastMessage, setToastMessage] = useState('');

  // Toggle the favorite status
  const addToFavorites = (movie) => {
    setFavoriteMovies((movies) => {
      const isMovieInFavorites = movies.some(
        (favMovie) => favMovie.id === movie.id,
      );

      if (isMovieInFavorites) {
        // If the movie is already in favorites, remove it
        const updatedMovies = movies.filter(
          (favMovie) => favMovie.id !== movie.id,
        );
        setToastMessage('Removed from favorites');
        toast.success('Removed from favorites');
        return updatedMovies;
      } else {
        // If the movie is not in favorites, add it
        const updatedMovies = [...movies, movie];
        setToastMessage('Added to favorites');
        toast.success('Added to favorites');
        return updatedMovies;
      }
    });
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
              <ToastContainer position="bottom-right" autoClose={3000} />
            </Home>
          }
        />

        <Route path="/movie/:movieId" element={<MovieDetailsSection />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteMovies={favoriteMovies}
              addToFavorites={addToFavorites}
            />
          }
        />
        <Route
          path="/cast/:castId"
          element={<MovieCastDetails addToFavorites={addToFavorites} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
