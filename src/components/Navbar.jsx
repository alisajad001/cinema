import { Link } from "react-router-dom";
import favouriteIcon from "../assets/heart-icon.svg";

const Navbar = () => {
  return (
    <header className="bg-slate-800 px-7 py-3 flex justify-between items-center">
      <h1 className="font-bold text-xl uppercase tracking-widest text-white">
        Cinema <span className="text-sky-400 ">Database</span>
      </h1>

      <input
        type="text"
        placeholder="Search a movie..."
        className="p-3 rounded-md bg-slate-700 text-white w-1/2 outline-none focus:outline-2 focus:outline-sky-400/40"
      />

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
    </header>
  );
};

export default Navbar;
