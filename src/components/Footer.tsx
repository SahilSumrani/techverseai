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
                <a href="mailto:officialsahilarora05@gmail.com" className="hover:underline">
                  officialsahilarora05@gmail.com
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
