import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-center items-center py-3 bg-transparent z-40" style={{ fontFamily: 'Matter, sans-serif' }}>
      {/* Desktop Navigation Pill - Sleek Compact Header */}
      <div className="hidden md:grid grid-cols-3 items-center rounded-full px-8 py-1 border border-gray-200 min-w-[720px] max-w-[850px] bg-white/95 backdrop-blur-md shadow-sm h-14">
        <div className="flex justify-center space-x-8">
          <a className="hover:text-blue-600 font-medium text-sm text-gray-800 transition-colors" href="/prebuilt">Prebuilt</a>
          <a className="hover:text-blue-600 font-medium text-sm text-gray-800 transition-colors" href="/customized">Customized</a>
        </div>
        <div className="flex justify-center items-center">
          <a href="/" className="flex items-center justify-center transition-transform hover:scale-105">
            <img
              src="/logo.png"
              alt="Techverse Logo"
              className="h-12 w-auto max-w-[280px] object-contain scale-[1.55]"
            />
          </a>
        </div>
        <div className="flex justify-center space-x-8">
          <a className="hover:text-blue-600 font-medium text-sm text-gray-800 transition-colors" href="/about-us">About Us</a>
          <a className="hover:text-blue-600 font-medium text-sm text-gray-800 transition-colors" href="/contact">Contact Us</a>
        </div>
      </div>

      {/* Mobile Header Bar - Prominent Mobile Logo */}
      <div className="flex md:hidden w-[92%] max-w-[420px] justify-between items-center px-4 sm:px-5 py-1 border border-gray-200 rounded-full bg-white/95 backdrop-blur-md shadow-sm z-50 h-13">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Techverse Logo"
            className="h-10 w-auto max-w-[220px] object-contain scale-[1.45] origin-left"
          />
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center py-6 space-y-6 md:hidden z-40 transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <a className="hover:text-blue-600 font-medium text-base" href="/prebuilt" onClick={() => setMobileMenuOpen(false)}>Prebuilt</a>
        <a className="hover:text-blue-600 font-medium text-base" href="/customized" onClick={() => setMobileMenuOpen(false)}>Customized</a>
        <a className="hover:text-blue-600 font-medium text-base" href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <a className="hover:text-blue-600 font-medium text-base" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
      </div>
    </nav>
  );
};
