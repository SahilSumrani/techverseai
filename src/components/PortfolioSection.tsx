import React from 'react';

interface Project {
  title: string;
  client: string;
  description: string;
  image: string;
  externalLink: string;
  caseStudyHref: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: 'DYU Solar — Solar EPC Startup Portal',
    client: 'DYU Solar (Delhi NCR)',
    description: 'Webflow → Next.js 14 conversion for a Delhi-based Solar EPC startup. Applied brand design tokens and achieved government-tender-grade content accuracy.',
    image: '/customized/work1.png',
    externalLink: 'https://dyusolar.com/',
    caseStudyHref: '/case-studies/dyu-solar',
    tag: 'Webflow to Next.js 14'
  },
  {
    title: 'Kisah.in — Men\'s Ethnic Ecommerce Storefront',
    client: 'Kisah Wearables',
    description: 'Custom Shopify/Next storefront for men\'s ethnic wear featuring interactive carousels, drawer navigation, and instant search overlay.',
    image: '/customized/work4.png',
    externalLink: 'https://cycle-website-sage.vercel.app/',
    caseStudyHref: '/case-studies/kisah-ecommerce',
    tag: 'Ecommerce / Shopify'
  },
  {
    title: 'Scalient — Webflow to React Migration',
    client: 'Scalient Inc.',
    description: 'Vite + React migration reverse-engineering 447 Webflow animation events with GSAP scroll-scrubbed interactions and sub-second loading.',
    image: '/customized/work3.png',
    externalLink: 'https://universityupdates.co.in/',
    caseStudyHref: '/case-studies/scalient',
    tag: 'GSAP & React Migration'
  },
  {
    title: 'Edu.Link — Dashboard UI & Admin System',
    client: 'Edu.Link Portal',
    description: 'Comprehensive teacher & administrator dashboard UI system engineered for real-time analytics, exam result tracking, and quick management.',
    image: '/customized/work2.png',
    externalLink: 'https://vinayakjyotish.org/',
    caseStudyHref: '/case-studies/edu-link',
    tag: 'SaaS & UI System'
  }
];

export const PortfolioSection: React.FC = () => {
  return (
    <section style={{ fontFamily: 'Matter, sans-serif' }} className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="inline-block px-4 py-1.5 bg-white shadow-2xs border border-gray-200 rounded-full text-blue-600 font-semibold text-xs uppercase tracking-wider mb-4">
          Selected Case Studies
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center text-gray-900 mb-4 px-2 leading-tight font-bold">
          Proven Engineering &amp; Client Success
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto px-2 text-sm sm:text-base lg:text-lg mb-10 sm:mb-14">
          Explore real-world case studies detailing our problem-solving approach, technical execution, and client outcomes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-7 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-200/90 flex flex-col justify-between group"
            >
              <div>
                <div className="rounded-xl w-full h-48 sm:h-64 lg:h-72 overflow-hidden mb-5 bg-gray-100 relative">
                  <img
                    alt={item.title}
                    src={item.image}
                    width="600"
                    height="400"
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-black/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block mb-1">
                  {item.client}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-2">
                <a
                  href={item.caseStudyHref}
                  className="text-xs sm:text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  Read Case Study &rarr;
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.externalLink}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors underline shrink-0"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 sm:mt-14">
        <a
          href="/customized"
          className="border border-black px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition-all shadow-xs inline-flex items-center justify-center min-h-[48px]"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
