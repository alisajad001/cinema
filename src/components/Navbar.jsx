import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-section bg-dark text-white flex justify-between items-center">
      <Link to="/" className="font-extrabold uppercase">
        Cinema <span className="text-primary">MDB</span>
      </Link>

      <Link to="/favorites" className="font-bold uppercase text-secondary">
        ❤ Favorites
      </Link>
    </header>
  );
};

export default Navbar;
