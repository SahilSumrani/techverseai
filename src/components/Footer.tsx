import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative border-t border-gray-200 w-full bg-cover bg-center"
      style={{ fontFamily: 'Matter, sans-serif' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-footer-text text-base text-gray-400">Contact us at</h3>
              <p className="text-footer-text text-lg font-medium text-gray-900">
                <a href="mailto:digitechcreator11@gmail.com" className="hover:underline">
                  digitechcreator11@gmail.com
                </a>
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-lg">
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 p-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="grow min-w-0 pl-4 pr-2 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none md:px-7 md:py-4"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-colors shrink-0 text-sm md:px-8 font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs text-gray-400 font-medium">Follow Us:</span>
              <a
                href="https://www.instagram.com/techverseai00/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white text-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/techverse-ai-digital-solution-37b998426/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 transition-all duration-300 transform hover:scale-110 shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-end">
            <div className="grid grid-cols-2 gap-12 sm:gap-16 text-right">
              <div>
                <h4 className="text-footer-muted text-base font-medium mb-4 text-gray-400">Links</h4>
                <nav className="space-y-2">
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/">Home</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/prebuilt">Prebuilt</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/customized">Customized</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/about-us">About Us</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/contact">Contact</a>
                </nav>
              </div>
              <div>
                <h4 className="text-footer-muted text-base font-medium mb-4 text-gray-400">More Resources</h4>
                <nav className="space-y-2">
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/blogs">Blogs</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/terms">Terms & Conditions</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/privacy">Privacy Policy</a>
                  <a className="block text-footer-text text-sm hover:text-blue-600 transition-colors" href="/refund">Refund Policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Unclipped Watermark Title */}
      <div className="w-full flex justify-center pt-4 pb-8 overflow-visible">
        <span
          className="w-full text-center font-bold tracking-wider select-none whitespace-nowrap bg-clip-text text-transparent text-[45px] sm:text-[75px] md:text-[95px] lg:text-[115px] leading-tight block"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(180, 180, 180, 0.45) 0%, rgba(235, 235, 235, 0.95) 100%)'
          }}
        >
          TECHVERSE
        </span>
      </div>
    </footer>
  );
};
