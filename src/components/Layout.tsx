import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel, Instagram, Facebook, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/packages', label: 'Packages' },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Hotel className="w-6 h-6 sm:w-8 sm:h-8 text-green-800" />
              <span className="text-xl sm:text-2xl font-serif text-green-900">Parkway</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base lg:text-lg font-medium ${
                    location.pathname === item.path
                      ? 'text-green-800'
                      : 'text-gray-600 hover:text-green-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="px-4 lg:px-6 py-2 bg-green-800 text-white text-sm lg:text-base rounded-full hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-green-800" />
              ) : (
                <Menu className="w-6 h-6 text-green-800" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden pt-4 pb-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium ${
                      location.pathname === item.path
                        ? 'text-green-800'
                        : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      <main className="pt-16 sm:pt-20">{children}</main>

      <footer className="bg-green-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-serif mb-4">Parkway Hotel</h3>
              <p className="text-sm sm:text-base text-green-100">
                Luxury and comfort in the heart of the city
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link to="/" className="text-green-100 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-green-100 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-green-100 hover:text-white">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-green-100">
                <li>123 Parkway Avenue</li>
                <li>City, State 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@parkwayhotel.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-800 text-center text-sm sm:text-base text-green-100">
            <p>&copy; 2024 Parkway Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;