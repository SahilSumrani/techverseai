import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section style={{ fontFamily: 'Matter, sans-serif' }} className="w-full flex flex-col items-center py-16 bg-white">
      <div className="px-4 py-1 bg-white shadow-md border border-gray-100 rounded-full text-gray-500 font-medium text-sm mb-4">
        Features
      </div>
      <h2 className="text-2xl sm:text-5xl text-center text-gray-800 mb-10 px-3 leading-snug font-medium">
        Streamline Business with our<br />
        Flexible Options
      </h2>

      <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 justify-center">
        {/* Card 1: Custom Development */}
        <a href="/customized" className="block max-w-[500px] w-full mx-auto">
          <article className="cursor-pointer bg-white flex flex-col items-center rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 p-5 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] w-full">
            <div className="flex justify-center items-center h-[200px] sm:h-[250px] w-full mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
              <img
                src="/home/custom_dev.png"
                alt="Custom Development"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="w-full text-left px-2">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
                Custom Development
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Tailor-made digital products built specifically for your brand’s scalability and identity.
              </p>
            </div>
          </article>
        </a>

        {/* Card 2: SaaS Prebuilt */}
        <a href="/prebuilt" className="block max-w-[500px] w-full mx-auto">
          <article className="cursor-pointer bg-white flex flex-col items-center rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 p-5 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] w-full">
            <div className="flex justify-center items-center h-[200px] sm:h-[250px] w-full mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
              <img
                src="/home/features2.png"
                alt="SaaS Prebuilt"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="w-full text-left px-2">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
                SaaS Prebuilt
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Launch fast with our ready-to-deploy, high-performance prebuilt SaaS & e-commerce templates.
              </p>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};
