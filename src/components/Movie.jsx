import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
        customClass="absolute top-1 left-1 z-20 flex justify-center items-center p-1 bg-secondary/50"
        onClick={() => addToFavorites(data)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
          fill="white"
        >
          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
        </svg>
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
