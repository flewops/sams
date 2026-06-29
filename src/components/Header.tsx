import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "../lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(245,124,0,1)] group-hover:-translate-y-0.5 transition-transform bg-white">
            <img src={SITE.logo} alt={`${SITE.shortName} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="block font-bold text-lg leading-tight tracking-tight text-gray-900">{SITE.shortName}</span>
            <span className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Matric HR. Sec. School</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === item.href ? "text-school-orange" : "text-gray-700 hover:text-school-orange"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-school-orange/10 rounded-full -z-10"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-school-blue text-white text-sm font-semibold shadow-[3px_3px_0px_0px_rgba(245,124,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(245,124,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Admissions
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white border-2 border-gray-900 text-gray-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-2 border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-xl font-medium ${
                    pathname === item.href ? "bg-school-orange/10 text-school-orange" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 rounded-xl bg-school-blue text-white text-center font-semibold"
              >
                Admissions
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
