import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="font-poppins w-full overflow-x-hidden min-h-auto sm:min-h-screen bg-transparent relative">
      <div className="flex flex-col items-center text-center px-4 justify-start bg-transparent">
        
        {/* Hero Image Container */}
        <div className="relative w-full mx-auto mt-0 sm:-mt-16 md:-mt-28 lg:-mt-32 max-w-sm sm:max-w-2xl lg:max-w-2xl">
          <img
            alt="Build your Startup with Techverse"
            decoding="async"
            className="w-full h-auto object-contain scale-100 sm:scale-[0.76] lg:scale-[0.66] transition-transform duration-300"
            style={{ color: 'transparent' }}
            src="/home/home.png"
          />
        </div>

        {/* Action Buttons - Cleanly positioned under image text on all screen sizes */}
        <div className="flex space-x-3 sm:space-x-4 mt-2 sm:-mt-28 md:-mt-36 lg:-mt-40 z-10">
          <a href="/customized">
            <button
              className="w-32 py-3.5 text-sm sm:w-44 sm:text-base lg:py-4 bg-black text-white rounded-full transition-transform hover:scale-105 hover:bg-gray-900 shadow-md"
              style={{ fontFamily: 'Matter, sans-serif', fontWeight: 500 }}
            >
              Let's Explore
            </button>
          </a>
          <a href="/contact">
            <button
              className="w-32 py-3.5 text-sm sm:w-44 sm:text-base lg:py-4 bg-white text-black rounded-full border border-gray-300 transition-transform hover:scale-105 hover:bg-gray-100 shadow-sm"
              style={{ fontFamily: 'Matter, sans-serif', fontWeight: 500 }}
            >
              Contact Us
            </button>
          </a>
        </div>

        {/* Audience Count Tag */}
        <div className="flex items-center gap-2 sm:gap-4 mt-4">
          <p className="text-gray-700 text-sm sm:text-lg leading-none" style={{ fontFamily: 'Matter, sans-serif' }}>
            Trusted by <span className="text-blue-500 font-semibold">1.3L+</span> Audience
          </p>
        </div>

        {/* Moving Ticker Strips */}
        <div className="flex flex-col items-center space-y-6 w-full mt-10 pb-12">
          {/* Left Moving Strip */}
          <div className="w-full overflow-hidden">
            <div className="strip-left flex gap-4">
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-1.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-1.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-1.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-1.png" />
            </div>
          </div>
          {/* Right Moving Strip */}
          <div className="w-full overflow-hidden relative isolate">
            <div className="strip-right flex gap-4">
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-2.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-2.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-2.png" />
              <img alt="strip" className="h-14 sm:h-16 w-auto object-contain" src="/common/strip-2.png" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
