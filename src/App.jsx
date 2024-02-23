import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './sections/Home';
import MoviesList from './components/MoviesList';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <MoviesList apiEndpoint="trending/movie/week" title="Trending" />
              <MoviesList apiEndpoint="movie/popular" title="Popular" />
            </Home>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
