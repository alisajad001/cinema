import { useState } from 'react';
import Movie from './Movie';

const MovieCastDetailsHeader = ({ personData, knownFor }) => {
  const [readMore, setReadMore] = useState(false);
  const [visibleMovies, setVisibleMovies] = useState(8);

  const { name, birthday, profile_path, place_of_birth, biography } =
    personData;

  return (
    <div className="flex flex-col md:flex-row py-12 px-3 sm:px-10 gap-5 items-center md:items-start">
      <div className="w-full  sm:w-1/2 flex flex-col items-center sm:items-start sm:justify-start justify-center">
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://placehold.co/300x450/001/FFF?text=Image not found'
          }
          alt={name || 'Actor Profile'}
          className="w-72 sm:w-80 object-cover rounded-md"
        />

        <div className="flex flex-col bg-hero rounded-md mt-5 w-72 sm:w-80 p-3">
          <h2 className="text-white text-xl sm:text-2xl mb-3 font-semibold">
            {name}
          </h2>

          {birthday && (
            <p className="text-primary">
              Birthday: <span className="text-white/60">{birthday}</span>
            </p>
          )}

          {place_of_birth && (
            <p className="text-primary">
              Place of birth:{' '}
              <span className="text-white/60">{place_of_birth}</span>
            </p>
          )}

          <p className="text-primary">
            {biography && (
              <>
                {' '}
                Biography:{' '}
                <span className="text-white/60">
                  {readMore ? biography : biography.slice(0, 150)}
                  {biography && (
                    <button
                      className="text-primary"
                      onClick={() => setReadMore((prev) => !prev)}
                    >
                      &nbsp; {readMore ? 'show less...' : 'show more...'}
                    </button>
                  )}
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="mt-20 sm:mt-0 w-full h-auto">
        <h2 className="text-white text-2xl mb-5 font-semibold">Known for</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
          {knownFor &&
            knownFor.cast.slice(0, visibleMovies).map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  customText={`as ${movie.character || 'N/A'}`}
                />
              );
            })}
          {knownFor && knownFor.cast.length > visibleMovies && (
            <button
              className="bg-secondary rounded-md p-3"
              onClick={() => setVisibleMovies((prev) => prev + 8)}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCastDetailsHeader;
