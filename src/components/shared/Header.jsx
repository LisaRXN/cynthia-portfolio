import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="relative sticky top-0 bg-zinc-900 z-50 text-slate-50 flex justify-between items-center h-[80px] w-full px-10 md:max-w-screen-2xl m-auto">
      <div className="logo">
        <a
          href="/"
          className=" text-xl font-grotesk font-semibold cursor-pointer"
        >
          ca<span className="text-mygreen text-3xl">.</span>
        </a>
      </div>

      {/* Menu principal */}
      <nav className={`gap-4 hidden md:flex font-open text-lg`}>
        <ul className="flex items-center gap-4 lg:gap-6">
          <div className="group relative">
            <Link
              to="/work"
              className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
            >
              work
            </Link>
          </div>
          <div className="group relative">
            <Link
              to="/about"
              className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
            >
              about
            </Link>
          </div>
          <div>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-zinc-700  hover:bg-zinc-950 rounded-full text-sm transition"
            >
              {i18n.language === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
            </button>
          </div>
        </ul>
      </nav>

      {/* Bouton burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-[35px] h-[24px] focus:outline-none"
      >
        <span
          className={`absolute top-0 left-0 w-full h-1 bg-base-content transition-all duration-300 ${
            isOpen
              ? "transform rotate-45 translate-y-[10px]"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`absolute bottom-0 left-0 w-full h-1 bg-base-content transition-all duration-300 ${
            isOpen
              ? "transform -rotate-45 -translate-y-[10px]"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
      </button>
      {/* Menu mobile plein écran */}
      {isOpen && (
        <div className="absolute z-50 top-20 left-0 w-full h-screen bg-zinc-900 text-white text-xl">
          <ul className="flex flex-col items-center justify-center text-4xl p-10 gap-10">
            <div className="group relative">
              <Link
                onClick={() => setIsOpen(false)}
                to="/work"
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
              >
                work
              </Link>
            </div>
            <div className="group relative">
              <Link
                onClick={() => setIsOpen(false)}
                to="/about"
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
              >
                about
              </Link>
              <div>
                {/* <button onClick={() => handleLanguageChange("en")}>
                  🇬🇧 English
                </button>
                <button onClick={() => handleLanguageChange("es")}>
                  🇪🇸 Español
                </button> */}
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-medium transition"
                >
                  {i18n.language === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
                </button>
              </div>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
