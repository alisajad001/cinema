import React from 'react';
import MovieDetails from './MovieDetails';
import MovieCast from './MovieCast';

const MovieCastsList = ({ casts, castLoading, castError, data }) => {
  if (castLoading) {
    return <p>Loading...</p>;
  }

  if (castError) {
    return <p>Error: {castError.message}</p>;
  }

  return (
    <section className="flex flex-col-reverse w-full max-w-6xl mx-auto sm:flex-row-reverse mb-12">
      <div className="p-4 sm:container mx-auto">
        {casts ? (
          <>
            <h3 className="text-lg font-semibold mb-5">Cast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-6">
              {casts.cast.map((cast) => (
                <MovieCast key={cast.id} cast={cast} />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {data ? <MovieDetails data={data} /> : <p>No movie details available.</p>}
    </section>
  );
};

export default MovieCastsList;
