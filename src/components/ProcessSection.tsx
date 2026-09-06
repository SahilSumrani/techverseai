import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="how-it-works" style={{ fontFamily: 'Matter, sans-serif' }} className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[44px] md:text-[56px] font-medium tracking-tight text-[#111111] leading-[1.1]">
            How It Works
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#666666] mt-3 font-normal">
            Working with Techverse AI is simple. We handle the heavy lifting, you focus on the vision.
          </p>
        </div>

        {/* 3-Column Bento Grid Layout matching Lume Agency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (2 Cards Stacked) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 1: Tell Us About Your Product */}
            <div className="group bg-[#F4F4F4] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/home/tell-us.webp"
                  alt="Tell Us About Your Product"
                  width="443"
                  height="269"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[220px] group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111111] mb-2">
                  Tell Us About Your Product
                </h3>
                <p className="text-[15px] text-[#666666] leading-[1.5]">
                  Share your idea, goals, and vision, we'll help you shape what's next.
                </p>
              </div>
            </div>

            {/* Card 2: Plan the Roadmap */}
            <div className="group bg-[#F4F4F4] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/home/plan-the-roadmap.webp"
                  alt="Plan the Roadmap"
                  width="485"
                  height="419"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[220px] group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111111] mb-2">
                  Plan the Roadmap
                </h3>
                <p className="text-[15px] text-[#666666] leading-[1.5]">
                  We define the scope, timeline, and strategy to bring your idea to life.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN (Tall Hero Card: We Design & Build) */}
          <div className="lg:col-span-4">
            <div className="group bg-[#F4F4F4] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[780px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full my-auto py-6 flex items-center justify-center">
                <img
                  src="/home/we-design.webp"
                  alt="We Design & Build"
                  width="785"
                  height="836"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[480px] group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111111] mb-2">
                  We Design & Build
                </h3>
                <p className="text-[15px] text-[#666666] leading-[1.5]">
                  Our design and development teams craft your product from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (2 Cards Stacked) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 4: Launch & Grow */}
            <div className="group bg-[#F4F4F4] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/home/launch-and-grow.webp"
                  alt="Launch & Grow"
                  width="485"
                  height="419"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[220px] group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111111] mb-2">
                  Launch & Grow
                </h3>
                <p className="text-[15px] text-[#666666] leading-[1.5]">
                  We launch, support, and scale your product as it evolves.
                </p>
              </div>
            </div>

            {/* Dark CTA Box: Have a Project? Book a Call */}
            <div className="group bg-[#050505] rounded-[24px] p-8 sm:p-10 flex flex-col justify-center items-center text-center h-full min-h-[380px] hover:bg-[#0c0c0c] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-[#888888] text-[15px] mb-4 font-normal">
                Have a Project?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 text-white text-[24px] sm:text-[28px] font-medium hover:text-gray-200 transition-colors"
              >
                <span>Book a Call</span>
                <span className="text-[26px] transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
                  ↗
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

