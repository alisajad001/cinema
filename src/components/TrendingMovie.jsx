const TrendingMovie = ({ title, poster_path, vote_average, release_date }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const imdbRating = vote_average.toFixed(1);
  const releaseDate = release_date.slice(0, 4);

  return (
    <div className="w-40 mb-2 rounded-lg cursor-pointer transition flex-shrink-0">
      <img
        src={imageUrl}
        alt="Movie Image"
        className="rounded-lg hover:saturate-150 transition object-cover w-full h-60"
      />

      <h3 className="text-sm font-semibold mt-2 text-white">
        {title}

        <div className="flex justify-between mt-1">
          <span className="block text-yellow-400 text-[10px]">
            <span className="bg-yellow-400 text-dark px-[2px] rounded-sm font-bold">
              IMDB
            </span>{' '}
            {imdbRating}
          </span>

          <span className="font-semibold text-[10px]">{releaseDate}</span>
        </div>
      </h3>
    </div>
  );
};

export default TrendingMovie;
