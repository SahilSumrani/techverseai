import React from 'react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/techverseai00/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-3 bottom-4 z-50 sm:left-5 sm:bottom-6 md:left-6 md:bottom-8 transition-transform duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-6 animate-floatingSmooth"
        aria-label="Instagram"
      >
        <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 relative">
          <img
            alt="Instagram"
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,0,150,0.25)] hover:drop-shadow-[0_0_15px_rgba(255,50,180,0.45)] transition-all duration-300"
            src="/common/Insta.svg"
          />
        </div>
      </a>
      <a
        href="https://wa.me/918700543448"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-3 bottom-4 z-50 sm:right-5 sm:bottom-6 md:right-6 md:bottom-8 transition-transform duration-300 hover:scale-125 hover:-translate-y-2 hover:-rotate-6 animate-floatingSmooth"
        aria-label="WhatsApp"
      >
        <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative">
          <img
            alt="WhatsApp"
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,255,70,0.25)] hover:drop-shadow-[0_0_15px_rgba(0,255,100,0.45)] transition-all duration-300"
            src="/common/WhatsApp.svg"
          />
        </div>
      </a>
    </>
  );
};
