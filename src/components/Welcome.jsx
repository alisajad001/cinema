const Welcome = ({ query, setQuery }) => {
  return (
    <section className="h-72 mb-10 flex items-center bg-gradientPrimary">
      <div className="px-3 sm:container mx-auto w-full text-center">
        <h1 className="text-3xl sm:text-5xl font-black">
          CINEMA <span className="text-primary">MDB</span>
        </h1>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for a movie..."
          className="w-full sm:w-[90%] md:w-[32rem] bg-white/10 border border-white/20 outline-none rounded-full p-4 mt-5"
        />
      </div>
    </section>
  );
};

export default Welcome;
