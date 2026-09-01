import React from 'react';

export const TickerBanner: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-black py-2">
      <div className="marquee inline-flex items-center space-x-4">
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/common/Developer.png" alt="Develop At its Best" className="h-16 sm:h-20 w-auto object-contain" />
      </div>
    </div>
  );
};
