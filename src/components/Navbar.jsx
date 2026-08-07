import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const items = [
    { to: "/lego-batman", label: "Lego batman" },
    { to: "/hitman-absolution", label: "Hitman Absolution" },
    { to: "/carrion", label: "Carrion" },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];
    return items.filter(item => item.label.toLowerCase().includes(q));
  }, [query]);

  const ulBg = document.getElementById("ul");

  const searchResultBox = (e) => {
    e.persist();
    e.target.style.display = "none"
  }

  return (
    <div>
      <nav className="flex items-center justify-center gap-x-7 bg-amber-500 h-13 text-lg text-black">
        <div>
          <input
            type="text"
            placeholder="Ask for a hand..."
            className="bg-gray-100 w-50 h-8 rounded-xl relative outline-0 group-hover: hover:bg-gray-200"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center justify-start fixed z-50" onClick={searchResultBox}>
            <ul id="ul" className=" bg-white" onClick={searchResultBox}>
              {filtered.map(it => (
                <li className="text-start w-90 h-10 group-hover: hover:text-amber-500" key={it.to}>
                  <Link to={it.to}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
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
      </nav >
    </div >
  );
};

export default Navbar;
