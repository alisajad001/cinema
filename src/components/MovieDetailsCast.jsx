import React from 'react';
import MovieDetails from './MovieDetails';

const MovieDetailsCast = ({ casts, castLoading, castError, data }) => {
  return (
    <section className="flex flex-col max-w-6xl mx-auto sm:flex-row">
      {castLoading && <p>Loading...</p>}
      {castError && <p>Error: {castError.message}</p>}
      <div className="p-4 sm:container mx-auto">
        <h3 className="text-lg font-semibold mb-5">Cast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-6">
          {casts &&
            casts.cast.map((cast) => {
              return (
                <div
                  key={cast.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : 'https://via.placeholder.com/300x450'
                    }
                    alt={cast.name}
                    className="w-36 h- rounded-md object-cover"
                  />
                  <h3 className="mt-2 font-semibold">{cast.name}</h3>
                  <p className="text-primary text-sm">
                    as <span className="text-white">{cast.character}</span>
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <MovieDetails data={data} />
    </section>
  );
};

export default MovieDetailsCast;
