import Welcome from '../components/Welcome';

const Home = ({ children }) => {
  return (
    <main className="bg-hero h-auto min-h-screen bg-cover text-white">
      <Welcome />
      <div className="px-3 sm:container mx-auto">{children}</div>
    </main>
  );
};

export default Home;
