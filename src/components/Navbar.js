import React, { useState } from 'react';
import { 
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-black">BIT PrintHub</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#services" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#pricing" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#contact" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-black hover:text-gray-600 text-sm font-medium">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-black hover:text-gray-600 text-sm font-medium">
                Services
              </a>
              <a href="#pricing" className="block px-3 py-2 text-black hover:text-gray-600 text-sm font-medium">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-gray-600 text-sm font-medium">
                Contact
              </a>
              <button className="w-full text-left bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Navbar;