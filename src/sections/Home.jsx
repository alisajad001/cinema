import MoviesList from '../components/MoviesList';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <main className="bg-hero h-auto min-h-screen bg-cover text-white">
      <Welcome />
      <div className="px-3 sm:container mx-auto">
        <MoviesList title="Trending" apiEndpoint="trending/movie/week" />
        <MoviesList title="Popular" apiEndpoint="movie/popular" />
      </div>
    </main>
  );
};

export default Home;
