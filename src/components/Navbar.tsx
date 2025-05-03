
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b border-gray-100">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="h-6 w-6 bg-company-blue rounded-sm"></div>
            <span className="font-bold text-lg text-company-dark">Buildr</span>
          </div>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-company-blue transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-blue transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-blue transition-colors">FAQ</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+12345678" className="hidden md:flex items-center text-sm text-gray-600 hover:text-company-blue">
              <span>+1 234 567 8901</span>
            </a>
            <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
