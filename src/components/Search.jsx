function Search() {
  return (
    <section className="gradient w-full h-80">
      <div className="max-w-7xl relative mx-auto h-full flex flex-col justify-center items-center gap-5 px-3">
        <h1 className="text-5xl sm:text-7xl uppercase font-semibold text-white tracking-wider">
          Cenima <span className="text-teal-500">.</span>
        </h1>

        <input
          type="text"
          placeholder="search"
          className="px-5 py-4 w-full max-w-xl outline-none rounded-full bg-white/30 border text-white placeholder:text-white"
        />
      </div>
    </section>
  );
}

export default Search;
