import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-slate-50 flex justify-between items-center h-[80px] w-full px-10">
      <div className="logo">
        <a href="/" className=" text-xl font-grotesk font-semibold cursor-pointer">
          ca<span className="text-mygreen text-3xl">.</span>
        </a>
      </div>

      {/* Menu principal */}
      <nav className={`gap-4 hidden md:flex font-open text-lg`}>
        <ul className="flex items-center gap-4 lg:gap-6">
          <div className="group relative">
            <Link to="/work"
              className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
            >
              work
            </Link>
          </div>
          <div className="group relative">
            <Link to="/about"
              className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
            >
              about
            </Link>
          </div>
        </ul>
      </nav>

      {/* Bouton burger */}
      <button
        className="md:hidden text-5xl text-slate-600"
        onClick={toggleMenu}
      >
        {" "}
        ☰{" "}
      </button>

      {/* Menu mobile plein écran */}
      {/* {isMenuOpen && (
          <HeaderMobile
            toggleMenu={toggleMenu}
          />
        )} */}
    </header>
  );
}

export default Header;
