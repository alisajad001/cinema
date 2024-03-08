const MovieCastDetailsHeader = ({ personData, knownFor }) => {
  const { name, birthday, profile_path, place_of_birth, biography } =
    personData;

  return (
    <div className="flex flex-col sm:flex-row py-12 px-3 sm:px-10">
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name || 'Actor Profile'}
          className="w-72 sm:w-80 h-[30rem] object-cover rounded-md"
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
    </div>
  );
};

export default MovieCastDetailsHeader;
