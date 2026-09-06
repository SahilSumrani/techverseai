import React from 'react';

interface TechIcon {
  name: string;
  iconUrl: string;
}

const techIcons: TechIcon[] = [
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Supabase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Shopify', iconUrl: '/home/shopify.svg' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
];

export const TechStackSection: React.FC = () => {
  // Duplicate arrays for infinite seamless marquee loop
  const col1 = [...techIcons.slice(0, 4), ...techIcons.slice(0, 4), ...techIcons.slice(0, 4)];
  const col2 = [...techIcons.slice(4, 8), ...techIcons.slice(4, 8), ...techIcons.slice(4, 8)];
  const col3 = [...techIcons.slice(8, 12), ...techIcons.slice(8, 12), ...techIcons.slice(8, 12)];

  return (
    <section style={{ fontFamily: 'Matter, sans-serif' }} className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side Column: Clean Typography & CTA Button matching Dribbble reference */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 shadow-2xs mb-6">
              <span className="text-xs font-semibold text-gray-800 tracking-tight">
                ✳ Our Tech Stack
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.12] mb-6">
              Key Technologies &amp; Platforms
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl mb-8">
              We work with leading platforms and technologies that empower digital transformation, accelerate delivery, and drive measurable business results.
            </p>

            <a
              href="/customized"
              className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center min-h-[48px]"
            >
              Explore Tech Stack
            </a>
          </div>

          {/* Right Side Column: 3-Column Vertical Infinite Marquee Grid with High-Res Brand SVG Icons */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full h-[460px] sm:h-[500px] rounded-3xl bg-gray-100/70 border border-gray-200/80 p-6 overflow-hidden shadow-inner flex justify-center gap-4 sm:gap-6">

              {/* Top & Bottom Soft Fading Gradient Shadows */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-gray-100 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-100 to-transparent z-20 pointer-events-none" />

              {/* Column 1 - Marquee Up */}
              <div className="flex flex-col gap-4 animate-marquee-up w-24 sm:w-28 shrink-0">
                {col1.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-md border border-gray-200/80 flex flex-col items-center justify-center p-3 shrink-0 transform transition-transform hover:scale-105"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        width="48"
                        height="48"
                        decoding="async"
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700 text-center truncate w-full">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 - Marquee Down */}
              <div className="flex flex-col gap-4 animate-marquee-down w-24 sm:w-28 shrink-0">
                {col2.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-md border border-gray-200/80 flex flex-col items-center justify-center p-3 shrink-0 transform transition-transform hover:scale-105"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        width="48"
                        height="48"
                        decoding="async"
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700 text-center truncate w-full">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 3 - Marquee Up */}
              <div className="flex flex-col gap-4 animate-marquee-up w-24 sm:w-28 shrink-0">
                {col3.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-md border border-gray-200/80 flex flex-col items-center justify-center p-3 shrink-0 transform transition-transform hover:scale-105"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        width="48"
                        height="48"
                        decoding="async"
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700 text-center truncate w-full">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
