const MovieCastDetailsHeader = ({ personData, knownFor }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${personData.profile_path}`}
        alt={personData.name || 'Actor Profile'}
        width="300"
      />
      <h1 className="text-3xl text-white font-semibold">{personData.name}</h1>
      <p className="text-white text-sm">{personData.known_for_department}</p>
      <p className="text-white text-sm">
        <span className="font-bold">Birthday:</span> {personData.birthday}
      </p>

      <h3>Known for </h3>
      {knownFor &&
        knownFor.cast.map((movie) => (
          <>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            <p key={movie.id} className="text-white">
              {movie.title}
            </p>
          </>
        ))}
    </div>
  );
};

export default MovieCastDetailsHeader;
