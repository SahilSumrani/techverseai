import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-black selection:text-white">
      <FloatingActions />
      <Navbar />

      <main className="w-full bg-white min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Matter, sans-serif' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500 text-base sm:text-lg">Last updated: September 4, 2026</p>
          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed font-poppins text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>1. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide when inquiring about our services, filling out contact forms, or booking consultations. This includes your name, email address, phone number, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information collected to respond to inquiries, process requests, deliver customized software solutions, send updates, and improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>3. Data Protection &amp; Security</h2>
              <p className="mb-4">
                We implement industry-standard encryption and security measures to maintain the safety of your personal data. We do not sell, trade, or share your personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>4. Contact Us</h2>
              <p className="mb-4">
                If you have any questions regarding this Privacy Policy, please contact us at:
              </p>
              <a href="mailto:digitechcreator11@gmail.com" className="text-black font-medium border-b border-black hover:text-blue-600 hover:border-blue-600 transition-colors">
                digitechcreator11@gmail.com
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
