import Welcome from '../components/Welcome';

const Home = ({ children, query, setQuery }) => {
  return (
    <main className="text-white py-20">
      <Welcome query={query} setQuery={setQuery} />
      <div className="px-3 sm:container mx-auto">{children}</div>
    </main>
  );
};

export default Home;
