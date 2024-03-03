import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieDetailsSection from './components/MovieDetailsSection';
import NotFoundPage from './components/NotFoundPage';
import { getApiURL } from './utils/apiUtils';
import RenderMoviesList from './components/RenderMovieList';

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home query={query} setQuery={setQuery}>
              <RenderMoviesList query={query} />
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
