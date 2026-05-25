import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

// Import your logo asset securely
import logoAsset from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Appointments', path: '/appointments' }
  ];

  return (
    <nav className="bg-white border-b border-slate-100 fixed top-0 inset-x-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Left Side: Large Brand Logo & Attractive Clinic Name Typography */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3.5 group">
              <img 
                src={logoAsset} 
                alt="RK Dental Care Logo" 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-102" 
              />
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase font-sans">
                  RK <span className="text-blue-500 font-medium">Dental Care</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase -mt-0.5">
                  Advanced Clinical Center
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Link Items */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                className="text-sm font-semibold text-slate-600 hover:text-blue-500 transition duration-200 tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/appointments"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-200"
            >
              <Phone size={14} /> Contact Clinic
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-500 p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Dropdown List Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-500 rounded-xl transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="/appointments"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-3.5 rounded-xl shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} /> Contact Clinic
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}