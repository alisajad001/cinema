import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-800 px-3 py-5 flex flex-col justify-between items-center">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold uppercase tracking-widest text-white">
          <span>Cinema</span>
          <span className="text-sky-400">MDB</span>
        </h1>

        <Link className="text-red-600 font-bold uppercase flex gap-2" to="#">
          Favorites
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="fill-red-600"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
          </svg>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search a movie..."
        className="py-2 px-4 mt-4 align-bottom rounded-md bg-slate-700 w-full text-white sm:w-1/2 outline-none focus:outline-2 focus:outline-sky-400/40 sm:absolute sm:mt-0 sm:top-3"
      />
    </header>
  );
};

export default Navbar;
