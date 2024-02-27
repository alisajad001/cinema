const Welcome = ({ query, setQuery }) => {
  return (
    <section className="h-96 mb-10 flex items-center bg-gradientPrimary">
      <div className="px-3 sm:container mx-auto w-full text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Welcome to <span className="text-primary">Cinema.</span>
        </h1>
        <p className="text-white/80 text-sm sm:text-xl mt-3">
          Find the world's largest collection of movies.
        </p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for a movie..."
          className="w-full bg-white/10 border border-white/20 outline-none rounded-full p-4 mt-10"
        />
      </div>
    </section>
  );
};

export default Welcome;
