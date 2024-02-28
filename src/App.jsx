import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import MoviesList from './components/MoviesList';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieDetailsSection from './components/MovieDetailsSection';
import NotFoundPage from './components/NotFoundPage';

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = useState('');
  const apiURL = `search/movie?query=${query}&`;

  return (
    <QueryClientProvider client={queryClient}>
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

        <Route path="movie/:id" element={<MovieDetailsSection />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
