import { useNavigate } from 'react-router-dom';

const MovieCast = ({ cast }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cast/${cast.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      key={cast.id}
      className="flex flex-col items-center text-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
              : 'https://placehold.co/300x450/001/FFF?text=Image not found'
          }
          alt={cast.name || 'Actor Profile'}
          className="rounded-sm object-cover hover:scale-105 transition-all"
        />
      </div>

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
