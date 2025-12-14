import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar text-center tracking-wide bg-[#F87B1B] flex justify-between text-xl text-[#11224E]">
      <div className="navbar-brand">
        <Link to="/">MovieApp</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourite" className="nav-link">
          Favourite
        </Link>
      </div>
      {/* <div>
        <button className="btn px-4 transition duration-200 py-2 bg-[#CBD99B] rounded-lg hover:bg-[#EEEEEE] hover:text-[#F87B1B]">
          Login
        </button>
      </div> */}
    </nav>
  );
}
