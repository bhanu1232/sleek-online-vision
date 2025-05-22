
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-company-blue-500 to-company-blue-700 rounded-lg shadow-lg shadow-company-blue-500/20 flex items-center justify-center">
              <span className="text-white text-sm font-bold">SV</span>
            </div>
            <span className="text-lg font-medium text-black">
              Sleek Vision
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/products' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors duration-300 relative group ${
                  isActive(item.path) ? 'text-company-blue font-medium' : 'text-black hover:text-company-blue'
                }`}
              >
                {item.name}
                <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-company-blue-500 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <Link to="/contact">
              <Button size="sm" className="bg-company-blue hover:bg-company-blue-700 text-white rounded-md">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-black" />
            ) : (
              <Menu className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}
        >
          <div className="space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/products' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm transition-colors duration-300 px-4 py-2 rounded-md ${
                  isActive(item.path) 
                    ? 'bg-company-blue-100 text-company-blue font-medium' 
                    : 'text-black hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mt-4 px-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-company-blue hover:bg-company-blue-700 text-white text-sm rounded-md">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
