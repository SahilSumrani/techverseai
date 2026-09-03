import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export const RefundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-black selection:text-white">
      <FloatingActions />
      <Navbar />

      <main className="w-full bg-white min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Matter, sans-serif' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">Refund &amp; Cancellation Policy</h1>
            <p className="text-gray-500 text-base sm:text-lg">Last updated: September 4, 2026</p>
          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed font-poppins text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>1. Custom Development Projects</h2>
              <p className="mb-4">
                Initial deposits for custom engineering projects cover discovery, architecture setup, and developer allocation. Deposits are refundable prior to project kickoff. Once development milestones commence, refunds are evaluated based on work completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>2. Prebuilt SaaS Solutions</h2>
              <p className="mb-4">
                Our pre-built applications include full access to pre-configured source code and deployment setups. Requests for cancellation before code transfer or server deployment are eligible for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>3. Processing Refunds</h2>
              <p className="mb-4">
                Approved refunds are processed within 5-7 business days back to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>4. Contact Us</h2>
              <p className="mb-4">
                For refund inquiries or billing assistance, please contact us at:
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
