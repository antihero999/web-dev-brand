import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function AvailabilityDot() {
  const dotRef = useRef(null);
  useEffect(() => {
    if (!dotRef.current) return;
    gsap.to(dotRef.current, { opacity: 0.3, duration: 1.2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
  }, []);
  return (
    <span className="hidden md:inline-flex items-center gap-1.5 mr-3">
      <span ref={dotRef} style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d6a4f', display: 'inline-block' }} />
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#2d6a4f', fontWeight: 600 }}>Available</span>
    </span>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-transparent py-4 shadow-none'
            : isScrolled
            ? 'bg-primary/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center gap-2">
            <img src="/logo.png" alt="Rexforge" className="w-12 h-12 object-contain aspect-square rounded-md shadow-sm" />
            <span className="text-2xl font-syne font-extrabold text-navy tracking-tight">Rexforge<span className="text-orange">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-jakarta font-medium text-navy/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => ({
                      color: isActive ? "#e85d26" : "#1a1a2e",
                      fontWeight: isActive ? "700" : "500",
                      borderBottom: isActive ? "2px solid #e85d26" : "2px solid transparent",
                      paddingBottom: "2px",
                      transition: "all 0.2s ease"
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <AvailabilityDot />
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-navy overflow-hidden rounded-full cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-orange transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="relative">Hire Us</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-navy p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-xl font-syne font-bold text-navy">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "#e85d26" : "#1a1a2e",
                  fontWeight: isActive ? "700" : "600",
                  borderBottom: isActive ? "2px solid #e85d26" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.2s ease"
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => ({
                color: isActive ? "#e85d26" : "#1a1a2e",
                fontWeight: isActive ? "700" : "600",
                borderBottom: isActive ? "2px solid #e85d26" : "2px solid transparent",
                paddingBottom: "2px",
                transition: "all 0.2s ease"
              })}
            >
              Contact / Hire Us
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
