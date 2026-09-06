import React from 'react';

interface PrimaryService {
  title: string;
  description: string;
  svgIcon: string;
  glowGradient: string;
}

interface SecondaryService {
  title: string;
  description: string;
}

const primaryServices: PrimaryService[] = [
  {
    title: 'Product Strategy',
    description: 'Defining clear roadmaps that set your product up for success.',
    svgIcon: '/home/strategy.svg',
    glowGradient: 'from-emerald-200/70 via-teal-200/50 to-transparent'
  },
  {
    title: 'App Development',
    description: 'iOS & Android apps built for performance and scale.',
    svgIcon: '/home/app-development.svg',
    glowGradient: 'from-pink-200/70 via-rose-200/50 to-transparent'
  },
  {
    title: 'Product Design',
    description: 'Human-centered, intuitive, and delightful experiences.',
    svgIcon: '/home/product-design.svg',
    glowGradient: 'from-yellow-200/70 via-amber-200/50 to-transparent'
  },
  {
    title: 'Backend & API Development',
    description: 'Robust systems that keep your product running smoothly.',
    svgIcon: '/home/backend.svg',
    glowGradient: 'from-blue-200/70 via-indigo-200/50 to-transparent'
  }
];

const secondaryServicesRow1: SecondaryService[] = [
  {
    title: 'AI Development',
    description: 'Custom AI solutions, from LLM-powered apps to intelligent automation tools.'
  },
  {
    title: 'SaaS & Dashboards',
    description: 'Complex data made simple with tailored SaaS solutions.'
  },
  {
    title: 'Web App Development',
    description: 'Modern, fast, and reliable web platforms.'
  }
];

const secondaryServicesRow2: SecondaryService[] = [
  {
    title: 'MVP Build',
    description: 'Defining clear roadmaps that set your product up for success.'
  },
  {
    title: 'Product Growth & Support',
    description: 'Long-term support to evolve your product with your business.'
  },
  {
    title: 'Branding',
    description: 'A brand that moves with your product — clear, modern, and made to scale.'
  }
];

export const ServicesGridSection: React.FC = () => {
  return (
    <section id="services" style={{ fontFamily: 'Matter, sans-serif' }} className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-[1440px]">
        <div className="bg-[#f7f7f7] rounded-[24px] px-4 py-10 md:px-[80px] md:py-[80px] flex flex-col items-center gap-8 md:gap-12">
          
          {/* Section Title matching Lume Agency */}
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.2] text-black text-center">
            End-to-End Services
          </h2>

          <div className="flex flex-col gap-4 w-full">
            
            {/* Top 4 Featured Cards Grid with user SVGs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {primaryServices.map((card, idx) => (
                <div
                  key={idx}
                  className="service-card bg-white border-2 border-white rounded-2xl px-6 py-10 flex flex-col gap-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden isolate group"
                >
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.08)] relative z-10">
                    <img
                      src={card.svgIcon}
                      alt={card.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <h3 className="text-[22px] font-semibold leading-[1.2] text-black">
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-[1.4] text-[#353535]">
                      {card.description}
                    </p>
                  </div>
                  {/* Subtle colorful glow gradient blur at bottom */}
                  <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 rotate-[-15deg] w-[280px] h-[170px] bg-gradient-to-t ${card.glowGradient} rounded-full blur-2xl opacity-75 -z-10 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div>

            {/* Row 1 Secondary 3 Grid Cards */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {secondaryServicesRow1.map((card, idx) => (
                <div
                  key={idx}
                  className="service-card bg-white border-2 border-white rounded-[16px] px-8 py-8 flex flex-col gap-2 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-[20px] font-semibold leading-[1.2] text-black">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.4] text-[#353535]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 Secondary 3 Grid Cards */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {secondaryServicesRow2.map((card, idx) => (
                <div
                  key={idx}
                  className="service-card bg-white border-2 border-white rounded-[16px] px-8 py-7 flex flex-col gap-2 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-[18px] font-semibold leading-[1.2] text-black">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.4] text-[#353535]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Scrollable View for secondary cards */}
            <div className="md:hidden mt-4">
              <div className="flex overflow-x-auto gap-3 snap-x snap-mandatory scrollbar-none pb-2 -mx-4 px-4">
                {[...secondaryServicesRow1, ...secondaryServicesRow2].map((card, idx) => (
                  <div
                    key={idx}
                    className="service-card bg-white border-2 border-white rounded-[16px] px-6 py-6 flex flex-col gap-2 min-w-[280px] shrink-0 snap-center shadow-xs"
                  >
                    <h3 className="text-[18px] font-semibold leading-[1.2] text-black">
                      {card.title}
                    </h3>
                    <p className="text-[13px] leading-[1.4] text-[#353535]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA button matching Lume black pill style */}
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-black rounded-full px-8 py-4 text-white text-[17px] font-medium shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.4)] hover:bg-[#1A1A1A] hover:shadow-[0px_15px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer mt-4 min-h-[48px]"
          >
            <span>Start Your Project</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};
