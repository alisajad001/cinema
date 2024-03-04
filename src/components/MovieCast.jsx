const MovieCast = ({ cast }) => {
  return (
    <div key={cast.id} className="flex flex-col items-center text-center">
      <img
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
            : 'https://placehold.co/300x450/001/FFF?text=Image not found'
        }
        alt={cast.name || 'Actor Profile'}
        className="w-36 rounded-md object-cover"
      />
      <h3 className="mt-2 font-semibold">{cast.name}</h3>
      <p className="text-primary text-sm">
        {cast.character ? (
          <>
            as <span className="text-white">{cast.character}</span>
          </>
        ) : null}
      </p>
    </div>
  );
};

export default MovieCast;
