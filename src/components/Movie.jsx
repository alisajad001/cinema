import { useNavigate } from 'react-router-dom';

const Movie = ({
  title,
  poster_path,
  vote_average,
  release_date,
  id,
  setQuery,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
    setQuery('');
  };

  const movieImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const movieRating = vote_average.toFixed(1);
  const movieReleaseDate = release_date.slice(0, 4);
  const movieTitle = title.substring(0, 18);

  return (
    <div
      className="w-32 sm:w-52 rounded-lg cursor-pointer transition flex-shrink-0"
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
        className="rounded-lg hover:saturate-150 hover:-translate-y-2 transition object-cover w-full"
      />

      <h3 className="text-sm font-semibold mt-2 text-white">
        {title.length < 18 ? title : `${movieTitle}...`}
      </h3>
      <div className="flex justify-between mt-1">
        <span className="font-semibold text-[10px]">{movieReleaseDate}</span>
        <span className="block text-yellow-400 text-[10px]">
          <span className="bg-yellow-400 text-dark px-[2px] rounded-sm font-bold">
            IMDB
          </span>{' '}
          {movieRating}
        </span>
      </div>
    </div>
  );
};

export default Movie;
