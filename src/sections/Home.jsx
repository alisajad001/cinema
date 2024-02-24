import Welcome from '../components/Welcome';

const Home = ({ children, query, setQuery }) => {
  return (
    <main className="bg-hero h-auto min-h-screen bg-cover text-white">
      <Welcome query={query} setQuery={setQuery} />
      <div className="px-3 sm:container mx-auto">{children}</div>
    </main>
  );
};

export default Home;
