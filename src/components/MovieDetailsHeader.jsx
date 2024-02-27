const MovieDetailsHeader = ({ data }) => {
  return (
    <div
      className="flex bg-cover bg-center justify-center items-center bg-fixed h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0)) , url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
      }}
    >
      <div className="p-4 sm:container flex flex-col sm:flex-row gap-10">
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold">
            {data.title}{' '}
            <span className=" text-sm sm:text-3xl">{`(${data.release_date.slice(
              0,
              4,
            )})`}</span>
          </h2>
          <p className="mt-2 text-lg sm:text-2xl text-gray-300">
            {data.tagline}
          </p>

          <div className="text-sm mt-3 flex flex-col sm:flex-row sm:gap-7">
            <span>{data.genres.map((genre) => genre.name).join(', ')}</span>
            <span>⏲{data.runtime && `${data.runtime} mins`}</span>
            <span>
              {data.vote_average && `⭐ ${data.vote_average.toFixed(1)}`}
            </span>
            <span>{data.release_date.slice(0, 4)}</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-7 text-secondary">
              Overview
            </h3>
            <p className="text-sm leading-6 text-white max-w-xl">
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
