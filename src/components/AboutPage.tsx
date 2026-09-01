import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { TeamSection } from './TeamSection';
import { FaqSection } from './FaqSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white font-poppins">
      <FloatingActions />

      {/* Hero Container */}
      <div className="relative w-full flex flex-col bg-no-repeat bg-center bg-cover min-h-[70vh] sm:min-h-[75vh] md:min-h-screen" style={{ backgroundImage: "url('/common/Bg2.png')" }}>
        <Navbar />

        <div className="flex-1 flex flex-col justify-start pt-12 md:justify-center md:pt-0">
          <section className="flex flex-1 items-start md:items-center justify-start md:justify-center text-center px-4 sm:px-6 pt-12 sm:pt-14 md:pt-0 h-[70vh] sm:h-[75vh] md:h-screen">
            <div className="w-full max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-snug sm:leading-tight font-medium" style={{ fontFamily: 'Matter, sans-serif' }}>
                Building the Digital Future
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500/80 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
                We empower businesses through innovative technology, custom software development, and prebuilt digital solutions designed for modern growth.
              </p>
            </div>
          </section>
        </div>

        {/* Floating Side Objects */}
        <img src="/common/object1.png" alt="Left Object" className="absolute top-20 left-2 w-14 sm:w-18 md:top-48 md:left-0 md:w-48 lg:top-48 lg:left-0 lg:w-64 float-animation pointer-events-none z-20" />
        <img src="/common/object2.png" alt="Right Object" className="absolute top-20 right-2 w-14 sm:w-18 md:top-20 md:right-0 md:w-48 lg:top-20 lg:right-0 lg:w-64 float-animation pointer-events-none z-20" />

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

      {/* Who We Are Section */}
      <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20 border-b border-gray-100" style={{ fontFamily: 'Matter, sans-serif' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-5 py-2 bg-white shadow-md rounded-full text-gray-600 text-xs sm:text-sm font-medium border border-gray-100 mb-6">
            About Techverse
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins mb-6">
            At Techverse, we are a passionate team of engineers, designers, and digital strategists committed to transforming bold ideas into high-performing digital products. From tailor-made web applications to scalable SaaS solutions, we bridge the gap between complexity and elegant execution.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins">
            Our mission is simple: deliver exceptional software engineering, lightning-fast deployment, and intuitive user experiences that help startups and established brands thrive in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Team Behind Wonders Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FaqSection />

      <Footer />
    </div>
  );
};
