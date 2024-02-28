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
    <section className="flex flex-col max-w-6xl mx-auto sm:flex-row">
      <div className="p-4 sm:container mx-auto">
        <h3 className="text-lg font-semibold mb-5">Cast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-6">
          {casts &&
            casts.cast.map((cast) => <MovieCast key={cast.id} cast={cast} />)}
        </div>
      </div>

      {data ? <MovieDetails data={data} /> : <p>No movie details available.</p>}
    </section>
  );
};

export default MovieCastsList;
