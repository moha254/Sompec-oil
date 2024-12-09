import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/img/logo.jpg" alt="Sompec Oil" className="h-12 w-12 rounded-full"/>
            <span className="text-2xl font-bold text-gray-900">Sompec Oil</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <div className="relative group">
              <Link to="/services" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2">
                <Link to="/services/oil-distribution" className="block px-4 py-2 hover:bg-gray-50">Oil Distribution</Link>
                <Link to="/services/quality-testing" className="block px-4 py-2 hover:bg-gray-50">Quality Testing</Link>
                <Link to="/services/consulting" className="block px-4 py-2 hover:bg-gray-50">Industry Consulting</Link>
              </div>
            </div>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600">Services</Link>
              <Link to="/products" className="text-gray-700 hover:text-red-600">Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};