import MoviesList from '../components/MoviesList';

const Home = () => {
  return (
    <main className="p-section bg-hero h-auto min-h-screen bg-cover text-white">
      <div className="max-w-[1280px] mx-auto">
        <MoviesList title="Trending" apiEndpoint="trending/movie/week" />
        <MoviesList title="Popular" apiEndpoint="movie/popular" />
      </div>
    </main>
  );
};

export default Home;
