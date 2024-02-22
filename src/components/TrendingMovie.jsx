const TrendingMovie = ({ title, poster_path, rating }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="w-full mb-2 border border-slate-900 rounded-lg p-2 cursor-pointer">
      <img
        src={imageUrl}
        alt="Movie Image"
        className="rounded-lg hover:saturate-150 transition object-cover"
      />

      <h3 className="flex justify-between items-center mt-2 text-sm font-semibold">
        {title}
        <span className="text-yellow-400 text-[10px]">
          <span className="bg-yellow-400 text-dark px-[2px] rounded-sm font-bold">
            IMDB
          </span>{' '}
          {rating}
        </span>
      </h3>
    </div>
  );
};

export default TrendingMovie;
