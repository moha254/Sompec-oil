import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Sompec Oil</h3>
            <p className="text-sm">
              A prominent player in the fuel marketing sector in Mozambique, commanding a retail network of 20 petrol stations spread out across the country in strategic locations.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Petroleum Marketing</li>
              <li>Wholesale and Retail Fuel Operations</li>
              <li>Fuel Transportation</li>
              <li>Construction and Renovation of Petrol Stations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition">Our Gallery</Link></li>
              <li><Link to="/news" className="hover:text-blue-400 transition">News</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@sompecoil.com" className="hover:text-blue-400 transition">
                  info@sompecoil.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+258 869 396 733" className="hover:text-blue-400 transition">
                  +258 869 396 733
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+258 877 114 444" className="hover:text-blue-400 transition">
                  +258 877 114 444
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Cuchamano / NYAMAPANDA BORDER, Mozambique side</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sompec Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};