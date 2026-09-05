import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-black selection:text-white">
      <FloatingActions />
      <Navbar />

      <main className="w-full bg-white min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Matter, sans-serif' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">Terms &amp; Conditions</h1>
            <p className="text-gray-500 text-base sm:text-lg">Last updated: September 4, 2026</p>
          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed font-poppins text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>1. Introduction</h2>
              <p className="mb-4">
                Welcome to Techverse AI. These Terms and Conditions govern your use of our website and services, including our pre-built applications and custom software development projects. By accessing or using our services, you agree to be bound by these terms.
              </p>
              <p>
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>2. Services &amp; Delivery</h2>
              <p className="mb-4">
                We provide both pre-built software platforms and tailor-made custom development services. Specific deliverables, timelines, and costs are outlined in your individual project proposal or agreement.
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong>Pre-built Solutions:</strong> Delivered as described on our product showcases with ready-to-deploy configurations.</li>
                <li><strong>Custom Development:</strong> Timelines are estimates and subject to prompt feedback and asset provision by the client.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>3. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment of agreed fees, Techverse AI transfers full operational ownership and code rights of custom projects to the client. Until final payment is processed, all code, design mockups, and digital assets remain the property of Techverse AI.
              </p>
              <p>
                You are granted a limited license to use our website and services for personal or business operations subject to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>4. Payment Terms</h2>
              <p className="mb-4">
                Payments are due upon receipt of invoice or according to milestone schedules agreed upon prior to project kickoff. We reserve the right to pause active development or withhold final source code deployment for overdue accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>5. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Techverse AI, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill resulting from third-party server downtime or external integrations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4" style={{ fontFamily: 'Matter, sans-serif' }}>6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns regarding these Terms &amp; Conditions, please reach out to us:
              </p>
              <a href="mailto:contact@techverseai.tech" className="text-black font-medium border-b border-black hover:text-blue-600 hover:border-blue-600 transition-colors">
                contact@techverseai.tech
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
