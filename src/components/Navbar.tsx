
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';

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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-9 w-9 bg-gradient-to-br from-company-blue-500 to-company-blue-700 rounded-lg shadow-lg shadow-company-blue-500/20 flex items-center justify-center">
              <span className="text-white text-lg font-bold">SV</span>
            </div>
            <span className={`text-xl font-medium ${isScrolled ? 'text-company-dark' : 'text-white'}`}>
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
                  isScrolled 
                    ? isActive(item.path) ? 'text-company-blue font-medium' : 'text-gray-700 hover:text-company-blue' 
                    : isActive(item.path) ? 'text-white font-medium' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute left-0 bottom-[-6px] h-[2px] bg-company-blue-500 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <div className="hidden lg:flex items-center space-x-3 pl-4 border-l border-gray-300">
              <Link to="/contact" className="flex items-center text-sm text-gray-600 hover:text-company-blue transition-colors">
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden xl:inline-block">Contact</span>
              </Link>
              <Link to="/contact" className="flex items-center text-sm text-gray-600 hover:text-company-blue transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden xl:inline-block">+91 72074 94328</span>
              </Link>
              <Link to="/contact">
                <Button size="sm" className="bg-gradient-to-r from-company-blue to-company-blue-700 hover:from-company-blue-700 hover:to-company-blue text-white font-medium rounded-md group">
                  Get Started <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} overflow-hidden`}
        >
          <div className="space-y-3">
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
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 mt-4 pt-4 px-4 space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-company-blue mr-2" />
                <a href="mailto:bchowdamfam@gmail.com" className="text-sm text-gray-600">bchowdamfam@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-company-blue mr-2" />
                <a href="tel:+917207494328" className="text-sm text-gray-600">+91 7207494328</a>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-company-blue hover:bg-company-blue-700 text-white text-sm px-4 py-2 h-auto rounded-md font-medium group mt-2">
                  Get Started <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
