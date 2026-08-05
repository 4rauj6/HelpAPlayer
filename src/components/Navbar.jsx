import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-amber-500 px-30 justify-end">
      <Link to="/">Home</Link>
      <Link to="/user-feed">Your feed</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
