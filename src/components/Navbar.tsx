import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav className={'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow-md'}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img src="/logo.png" alt="" className='relative h-10 w-10' />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                Sleek Vision
              </span>
              {/* <span className="text-xs text-gray-500">Digital Excellence</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                  ? 'text-purple-700'
                  : 'text-gray-600 hover:text-purple-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm px-6 py-4 h-auto group rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(item.path)
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 mt-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm px-6 py-2 h-auto group rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Contact <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
