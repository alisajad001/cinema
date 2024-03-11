import Movie from '../components/MovieList/Movie';

const Favorites = ({ favoriteMovies }) => {
  return (
    <section className="p-5">
      <h2 className="text-white text-2xl font-bold mb-7">Favorites</h2>
      <div className="container mx-auto flex gap-6 flex-wrap justify-center">
        {favoriteMovies.map((movie) => {
          return (
            <Movie key={movie.id} data={movie} id={movie.id} className="w-52" />
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
