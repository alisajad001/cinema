import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <p className="text-white sm:text-xl mb-5">404 | Page not found</p>
      <Link
        to="/"
        className="bg-primary py-2 px-4 hover:bg-primary/80 transition"
      >
        Go to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
