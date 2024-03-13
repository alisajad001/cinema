import { useEffect } from 'react';

const MovieDetailsHeader = ({ data }) => {
  if (!data) {
    return <p>No data available for the movie.</p>;
  }

  const {
    backdrop_path,
    title,
    release_date,
    tagline,
    genres,
    runtime,
    vote_average,
    overview,
  } = data;

  useEffect(() => {
    document.title = `${title} - Movie`;

    return () => {
      document.title = '🎬 Cinema | Ali Sajad';
    };
  }, [title]);

  const movieRuntime = (runtime / 60).toFixed(1);

  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : `https://placehold.co/1920x700/001/FFF?text=Image+coming+soon...`;

  return (
    <div
      className="flex bg-no-repeat bg-cover bg-center justify-center items-center pb-20 pt-60"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0)) , url(${backdropUrl})`,
      }}
    >
      <div className="p-4 sm:container flex flex-col sm:flex-row gap-10">
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold">
            {title}{' '}
            <span className=" text-sm sm:text-3xl">{`(${release_date.slice(
              0,
              4,
            )})`}</span>
          </h2>
          <p className="mt-2 text-lg sm:text-2xl text-gray-300">
            {tagline || 'No tagline available'}
          </p>

          <div className="text-sm mt-3 flex flex-col sm:flex-row sm:gap-7">
            <span>
              {genres && genres.map((genre) => genre.name).join(', ')}
            </span>
            <span>⏲{runtime && `${movieRuntime} hour`}</span>
            <span>{vote_average && `⭐ ${vote_average.toFixed(1)}`}</span>
            <span>{release_date.slice(0, 4)}</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-7 text-secondary">
              Overview
            </h3>
            <p className="text-sm leading-6 text-white max-w-xl">
              {overview || 'No overview available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
