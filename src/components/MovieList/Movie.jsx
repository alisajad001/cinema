import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const Movie = ({
  data,
  id,
  setQuery,
  query,
  className,
  customText,
  addToFavorites,
}) => {
  const navigate = useNavigate();

  const { title, poster_path, vote_average, release_date } = data;

  const handleClick = () => {
    navigate(`/movie/${id}`);
    query && setQuery('');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const movieImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const movieRating = vote_average.toFixed(1);
  const movieReleaseDate = release_date.slice(0, 4);
  const movieTitle = title.substring(0, 18);

  return (
    <div
      className={`${className || 'w-full'} transition flex-shrink-0 relative`}
    >
      <Button
        customClass="absolute top-1 left-1 z-20 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center bg-black/50"
        onClick={() => addToFavorites(data)}
      >
        <span className="text-md sm:text-xl">❤</span>
      </Button>

      <div
        className="relative overflow-hidden rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={
            poster_path
              ? movieImage
              : 'https://placehold.co/300x450/001/FFF?text=Image not found'
          }
          alt={title}
          title={title}
          loading="lazy"
          className="rounded-md hover:saturate-150 hover:scale-110 transition object-cover w-full"
        />
      </div>

      <h3 className="text-sm font-bold mt-2 text-white">
        {title.length < 18 ? title : `${movieTitle}...`}
      </h3>
      {<span className="text-primary">{customText}</span> && (
        <div className="flex justify-between mt-1">
          <span className="font-semibold text-[10px] text-white">
            {movieReleaseDate}
          </span>
          <span className="block text-yellow-400 text-[10px]">
            <span className="bg-yellow-400 text-dark px-[2px] rounded-sm font-bold">
              IMDB
            </span>{' '}
            {movieRating}
          </span>
        </div>
      )}
    </div>
  );
};

export default Movie;
