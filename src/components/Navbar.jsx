import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const items = [
  { to: "/lego-batman", label: "Lego batman" },
  { to: "/hitman-absolution", label: "Hitman Absolution" },
  { to: "/carrion", label: "Carrion" },
];

const Navbar = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];
    return items.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  document.addEventListener("click", (event) => {
    const ul = document.getElementById("ul");
    if (!ul.contains(event.target)) {
      ul.style.display = "none";
    }
  });

  const clearSearchFilter = () => {
    setQuery("");
  };

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
          {filtered.length > 0 && (
            <div className="flex items-center justify-start fixed z-50">
              <ul id="ul" className=" bg-white">
                {filtered.map((item) => (
                  <li
                    className="text-start w-90 h-10 group-hover: hover:text-amber-500"
                    key={item.to}
                  >
                    <Link to={item.to} onClick={clearSearchFilter}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link to="/" className="hover:text-amber-50">
          Home
        </Link>

        <Link to="/about" className="hover:text-amber-50">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
