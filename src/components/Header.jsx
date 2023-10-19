import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative bg-transparent p-4">
      <div className="fixed top-0 right-0 z-50 w-full flex justify-between items-center">
        <Link to="/" className="text-white text-justify font-fira-code text-16 font-semibold">
          Lukas Moyano
        </Link>
        <div className="p-3 min-w-[500px]:hidden">
          <button onClick={toggleMenu} className="text-white text-xl">
            {menuOpen ? "X" : "Index"}
          </button>
        </div>
      </div>

      <nav className={`bg-gray-800 min-w-[500px]:place-items-end grid min-h-screen w-full fixed top-0 z-20 transition-all duration-500 min-w-[500px]:min-h-[60px] ${menuOpen ? "left-0" : "left-full"}`}>
        <ul className="min-w-[500px]:w-2/3 min-w-[500px]:grid-rows-none min-w-[500px]:grid-cols-[repeat(auto-fill,_auto)] min-w-[500px]:py-4 py-20 px-4 text-2xl grid grid-rows-[repeat(auto-fill,_auto)] place-items-center gap-4 min-w-[500px]:place-items-end">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Home
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Works
            </Link>
          </li>
          <li>
            <Link to="/aboutme" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Something About Me
            </Link>
          </li>
          <li>
            <Link to="/contactme" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Works
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Works
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
              # Works
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
