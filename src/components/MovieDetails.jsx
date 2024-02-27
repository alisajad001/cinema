import { useParams } from 'react-router-dom';
import useFetch from './hooks/useFetch';

const MovieDetails = () => {
  const { id } = useParams();

  const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  }`;

  const apiCasts = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
    import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  }`;

  const { data, loading, error } = useFetch(apiURL);
  const {
    data: casts,
    loading: castLoading,
    error: castError,
  } = useFetch(apiCasts);

  return (
    <section className="h-auto text-white">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="w-full flex flex-col">
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
                  <span>
                    {data.genres.map((genre) => genre.name).join(', ')}
                  </span>
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

          {/* Cast */}
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
                          as{' '}
                          <span className="text-white">{cast.character}</span>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="p-4 bg-black/30 sm:w-1/3 pt-12">
              <div className="mt-3">
                <p className="text-primary font-bold">Release Date</p>
                <p>{data.release_date}</p>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Budget</p>
                <p>{data && `$${data.budget}`}</p>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Revenue</p>
                <p>{data && `$${data.revenue}`}</p>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Runtime</p>
                <p>{data && `${data.runtime} mins`}</p>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Companies</p>

                <ul>
                  {data.production_companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Countries</p>
                <ul>
                  {data.production_countries.map((country) => (
                    <li key={country.iso_3166_1}>{country.name}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <p className="text-primary font-bold">Languages</p>
                <ul>
                  {data.spoken_languages.map((language) => (
                    <li key={language.iso_639_1}>{language.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
