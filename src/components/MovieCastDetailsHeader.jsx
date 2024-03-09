import Movie from './Movie';

const MovieCastDetailsHeader = ({ personData, knownFor }) => {
  const { name, birthday, profile_path, place_of_birth, biography } =
    personData;

  return (
    <div className="flex flex-col md:flex-row py-12 px-3 sm:px-10 gap-5 items-center md:items-start">
      <div className="w-full  sm:w-1/2 flex flex-col items-center sm:items-start sm:justify-start justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name || 'Actor Profile'}
          className="w-72 sm:w-80 object-cover rounded-md"
        />

        <div className="flex flex-col bg-hero rounded-md mt-5 w-72 sm:w-80 p-3">
          <h2 className="text-white text-xl sm:text-2xl mb-3 font-semibold">
            {name}
          </h2>
          <p className="text-primary">
            Birthday: <span className="text-white/60">{birthday}</span>
          </p>
          <p className="text-primary">
            Place of birth:{' '}
            <span className="text-white/60">{place_of_birth}</span>
          </p>

          <p className="text-primary">
            Biography: <span className="text-white/60">{biography}</span>
          </p>
        </div>
      </div>

      <div className="mt-20 sm:mt-0 w-full h-auto">
        <h2 className="text-white text-2xl mb-5 font-semibold">Known for</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
          {knownFor &&
            knownFor.cast.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieCastDetailsHeader;
