import TrendingMovies from '../components/TrendingMovies';

const Home = () => {
  return (
    <main className="p-section bg-hero h-auto min-h-screen bg-cover text-white">
      <div className="max-w-[1280px] mx-auto">
        <TrendingMovies />
      </div>
    </main>
  );
};

export default Home;
