import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-7 bg-amber-500 h-13 text-lg text-black">
      <div id="search-box">
        <input
          className="text-start w-60 px-5 bg-white placeholder-gray-500 rounded-sm h-8 outline-none"
          placeholder="Search for a hand..."
        />
      </div>

      <Link to="/" className="hover:text-amber-50">
        Home
      </Link>

      <Link to="/user-feed" className="hover:text-amber-50">
        Your feed
      </Link>

      <Link to="/about" className="hover:text-amber-50">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
