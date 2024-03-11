import Movie from '../components/MovieList/Movie';

const Favorites = ({ favoriteMovies, addToFavorites }) => {
  return (
    <section className="p-5">
      <h2 className="text-white text-2xl font-bold mb-7">Favorites</h2>
      <div className="container mx-auto flex gap-6 flex-wrap justify-center">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                data={movie}
                id={movie.id}
                addToFavorites={addToFavorites}
                className="w-52"
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
