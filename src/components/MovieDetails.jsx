import React from 'react';

const MovieDetails = ({ data }) => {
  return (
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
  );
};

export default MovieDetails;
