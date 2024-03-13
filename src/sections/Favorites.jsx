import { ToastContainer } from 'react-toastify';
import Movie from '../components/MovieList/Movie';

const Favorites = ({ favoriteMovies, addToFavorites }) => {
  return (
    <section className="p-5">
      <h2 className="text-white text-2xl font-bold mb-7">Favorites</h2>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="container mx-auto gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                data={movie}
                id={movie.id}
                addToFavorites={addToFavorites}
              />
            );
          })
        ) : (
          <p className="h-screen text-white">Nothing in your favorite list.</p>
        )}
      </div>
    </section>
  );
};

export default Favorites;
