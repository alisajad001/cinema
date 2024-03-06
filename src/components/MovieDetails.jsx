const MovieDetails = ({ data }) => {
  // Seperating thousands with comma
  const movieBudget = data.budget.toLocaleString();
  const movieRevenue = data.revenue.toLocaleString();

  return (
    <div className="p-4 bg-black/30 w-full sm:w-96 py-10 sm:pt-12">
      <div className="mt-3">
        <p className="text-primary font-bold">Release Date</p>
        <p>{data.release_date}</p>
      </div>

      <div className="mt-3">
        <p className="text-primary font-bold">Budget</p>
        <p>{`${data.budget ? `$${movieBudget}` : 'N/A'}`}</p>
      </div>

      <div className="mt-3">
        <p className="text-primary font-bold">Revenue</p>
        <p>{`${data.revenue ? `$${movieRevenue}` : 'N/A'}`}</p>
      </div>

      <div className="mt-3">
        <p className="text-primary font-bold">Runtime</p>
        <p>{`${data.runtime ? `${data.runtime / 60} Hour` : 'N/A'}`}</p>
      </div>

      {data.production_companies.length > 0 && (
        <div className="mt-3">
          <p className="text-primary font-bold">Companies</p>
          <ul>
            {data.production_companies.map((company) => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
        </div>
      )}

      {data.production_countries.length > 0 && (
        <div className="mt-3">
          <p className="text-primary font-bold">Countries</p>
          <ul>
            {data.production_countries.map((country) => (
              <li key={country.iso_3166_1}>{country.name}</li>
            ))}
          </ul>
        </div>
      )}

      {data.spoken_languages.length > 0 && (
        <div className="mt-3">
          <p className="text-primary font-bold">Languages</p>
          <ul>
            {data.spoken_languages.map((language) => (
              <li key={language.iso_639_1}>{language.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
