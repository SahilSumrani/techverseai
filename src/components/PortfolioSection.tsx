import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Dyu Solar',
    description: 'Clean, sustainable solar energy solutions for residential & commercial needs.',
    image: '/customized/work1.png',
    link: 'https://dyusolar.com/'
  },
  {
    title: 'University Updates',
    description: 'Comprehensive educational news, exam results & university notifications portal.',
    image: '/customized/work3.png',
    link: 'https://universityupdates.co.in/'
  },
  {
    title: 'Vinayak Jyotish',
    description: 'Vedic astrology & spiritual consultation platform featuring online booking.',
    image: '/customized/work2.png',
    link: 'https://vinayakjyotish.org/'
  },
  {
    title: 'Cycle Store Ecom',
    description: 'Modern online bicycle storefront with interactive gear & model selection.',
    image: '/customized/work4.png',
    link: 'https://cycle-website-sage.vercel.app/'
  }
];

export const PortfolioSection: React.FC = () => {
  return (
    <section style={{ fontFamily: 'Matter, sans-serif' }} className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-white shadow-sm border border-gray-200 rounded-full text-gray-500 font-medium text-sm mb-4">
          Portfolio
        </div>
        <h2 className="text-2xl sm:text-5xl text-center text-gray-800 mb-12 px-3 leading-snug font-medium">
          Turning Visions Into Digital Reality
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-x-8 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((item, idx) => (
            <a
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              className="block group"
            >
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 w-full border border-gray-100 h-full flex flex-col justify-between">
                <div>
                  <div className="rounded-xl w-full h-48 overflow-hidden mb-4 bg-gray-100">
                    <img
                      alt={item.title}
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a href="/customized">
          <button className="border border-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all shadow-sm">
            View All Projects
          </button>
        </a>
      </div>
    </section>
  );
};
