import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import MoviesList from './components/MoviesList';
import useFetch from './components/hooks/useFetch';
import { useState } from 'react';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [query, setQuery] = useState('');
  const apiURL = `search/movie?query=${query}&`;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home query={query} setQuery={setQuery}>
              {query.length > 0 ? (
                <MoviesList apiEndpoint={apiURL} title="Search result" />
              ) : (
                <>
                  <MoviesList
                    apiEndpoint="trending/movie/week?"
                    title="Trending"
                  />
                  <MoviesList apiEndpoint="movie/popular?" title="Popular" />
                </>
              )}
            </Home>
          }
        />

        <Route path="movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
