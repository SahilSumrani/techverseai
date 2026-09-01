import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

interface Project {
  title: string;
  image: string;
  link: string;
  points: string[];
  imageOrder: string; // 'md:order-1' or 'md:order-2'
  textOrder: string;  // 'md:order-2' or 'md:order-1'
}

const projects: Project[] = [
  {
    title: 'Dyu Solar',
    image: '/customized/work1.png',
    link: 'https://dyusolar.com/',
    imageOrder: 'md:order-1',
    textOrder: 'md:order-2',
    points: [
      'Clean, sustainable solar energy solutions for residential & commercial needs.',
      'Showcasing solar panel installations, net metering & energy savings calculator.',
      'Fast inquiry form and seamless consultation booking for solar power.',
      'Mobile-optimised responsive design highlighting green eco-friendly credentials.'
    ]
  },
  {
    title: 'University Updates',
    image: '/customized/work3.png',
    link: 'https://universityupdates.co.in/',
    imageOrder: 'md:order-2',
    textOrder: 'md:order-1',
    points: [
      'Comprehensive educational news, exam results & university notifications portal.',
      'Real-time updates on exam schedules, admit cards & academic syllabus.',
      'Clean category hierarchy for universities, competitive exams & admission alerts.',
      'Fast loading mobile-optimised portal designed for high traffic performance.'
    ]
  },
  {
    title: 'Vinayak Jyotish',
    image: '/customized/work2.png',
    link: 'https://vinayakjyotish.org/',
    imageOrder: 'md:order-1',
    textOrder: 'md:order-2',
    points: [
      'Vedic astrology & spiritual consultation platform with online booking.',
      'Detailed gemstone recommendations, horoscope matching & ritual guidance.',
      'User-friendly layout designed for quick appointment scheduling.',
      'Responsive mobile interface optimised for global visitors.'
    ]
  }
];

export const CustomizedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'applications'>('websites');

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white font-poppins">
      <FloatingActions />

      {/* Hero Container */}
      <div className="relative w-full flex flex-col bg-no-repeat bg-center bg-cover min-h-[70vh] sm:min-h-[75vh] md:min-h-screen" style={{ backgroundImage: "url('/common/Bg2.png')" }}>
        <Navbar />

        <div className="flex-1 flex flex-col justify-start pt-12 md:justify-center md:pt-0">
          <section className="flex flex-1 items-start md:items-center justify-start md:justify-center text-center px-4 sm:px-6 pt-12 sm:pt-14 md:pt-0 h-[70vh] sm:h-[75vh] md:h-screen">
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-snug sm:leading-tight font-medium" style={{ fontFamily: 'Matter, sans-serif' }}>
                Customized Development <br />From Scratch
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500/80 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
                We transform your unique ideas into powerful, scalable applications. Our team crafts tailor-made software solutions designed specifically for your business needs, from the first line of code to the final launch.
              </p>
            </div>
          </section>
        </div>

        {/* Floating Side Objects */}
        <img src="/common/object1.png" alt="Left Object" className="absolute top-36 left-2 w-20 md:top-48 md:left-0 md:w-48 lg:top-48 lg:left-0 lg:w-64 float-animation pointer-events-none z-20" />
        <img src="/common/object2.png" alt="Right Object" className="absolute top-35 right-2 w-20 md:top-20 md:right-0 md:w-48 lg:top-20 lg:right-0 lg:w-64 float-animation pointer-events-none z-20" />

        {/* Marquee Banner */}
        <div className="overflow-hidden w-full bg-black">
          <div className="marquee inline-flex items-center">
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
            <img src="/common/Developer.png" alt="Moving String" className="h-16 sm:h-20 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full flex flex-col items-center text-center my-16 px-6">
        <div className="px-6 py-2 bg-white shadow-md rounded-full text-gray-600 text-sm font-medium border border-gray-100" style={{ fontFamily: 'Matter, sans-serif' }}>
          Projects
        </div>
        <h2 className="mt-6 text-center text-gray-900 text-3xl sm:text-5xl font-medium" style={{ fontFamily: 'Matter, sans-serif' }}>
          Our Top Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-8" style={{ fontFamily: 'Matter, sans-serif' }}>
          <button
            onClick={() => setActiveTab('websites')}
            className={`px-6 py-2 rounded-xl transition-all duration-300 transform ${
              activeTab === 'websites'
                ? 'bg-black text-white shadow-lg -translate-y-0.5'
                : 'bg-white text-gray-700 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-2 rounded-xl transition-all duration-300 transform ${
              activeTab === 'applications'
                ? 'bg-black text-white shadow-lg -translate-y-0.5'
                : 'bg-white text-gray-700 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            Applications
          </button>
        </div>

        {/* Project List */}
        <section className="mt-16 w-full max-w-7xl mx-auto px-4 md:px-12 space-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-12 items-center px-2 md:px-6">
              <div className={`flex justify-center p-4 rounded-2xl bg-gray-100 shadow-md ${project.imageOrder}`}>
                <img src={project.image} alt={project.title} className="rounded-xl w-[90%] max-w-md hover:scale-105 transition-transform duration-500" />
              </div>
              <div className={`rounded-xl text-left ${project.textOrder}`}>
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 text-center md:text-left font-medium" style={{ fontFamily: 'Matter, sans-serif' }}>
                  {project.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-gray-600 text-base md:text-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-900 border border-gray-200">
                        {String(pIdx + 1).padStart(2, '0')}
                      </span>
                      <p className="flex-1">{point}</p>
                    </li>
                  ))}
                </ul>
                <a target="_blank" rel="noopener noreferrer" href={project.link}>
                  <button className="px-6 py-2 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition-colors" style={{ fontFamily: 'Matter, sans-serif' }}>
                    View Website
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};
