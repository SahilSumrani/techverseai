import React from 'react';
import { MapPin, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ fontFamily: 'Matter, sans-serif' }} className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Agency Entity & E-E-A-T Signal */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Based in Delhi, NCR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Who Behind Techverse AI?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Techverse AI is a Delhi-based digital engineering and AI development agency specializing in custom web applications, SaaS boilerplates, and high-conversion e-commerce solutions.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            We partner directly with founders, growing startups, and established enterprises to deliver high-performance code, custom UI/UX design systems, and SEO-optimized web products with zero friction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-800">100% Code Ownership</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-800">3-Month Free Support</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <Zap className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-800">Fast 48-72h Turnaround</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-800">Delhi &amp; Global Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Side: Trust & Stats Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Engineered for Speed, Scalability &amp; Search Visibility
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              We bridge the gap between complex AI capabilities and real-world business growth. Every line of code is structured for Google indexing, high mobile scores, and rapid conversion.
            </p>

            <div className="pt-6 border-t border-blue-400/40 grid grid-cols-2 gap-6">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold block">100%</span>
                <span className="text-xs text-blue-200 uppercase font-medium">On-Time Project Delivery</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold block">48-72h</span>
                <span className="text-xs text-blue-200 uppercase font-medium">Prebuilt SaaS Launch</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/about-us"
                className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm rounded-full transition-colors shadow-sm inline-flex items-center justify-center min-h-[48px]"
              >
                Learn More About Us &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
