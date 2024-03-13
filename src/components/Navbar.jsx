import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-section bg-dark text-white flex justify-between items-center fixed w-full z-50">
      <Link to="/" className="font-extrabold uppercase">
        Cinema <span className="text-primary">MDB</span>
      </Link>
      {/* <span className="text-secondary">under development</span> */}
      <Link to="/favorites" className="font-bold uppercase text-secondary">
        ❤ Favorites
      </Link>
    </header>
  );
};

export default Navbar;
