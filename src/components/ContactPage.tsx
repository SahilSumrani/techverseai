import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { MapPin, Mail, Phone, User, MessageSquare, MailOpen } from 'lucide-react';
import { saveQuery } from '../services/queryService';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveQuery({
      ...formData,
      source: 'Contact Us Page'
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 4000);
  };

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
                Contact Us
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500/80 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
                From idea to launch, we design and develop tailor-made websites & apps that scale with your business.
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

      {/* Main Contact Content */}
      <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20" style={{ fontFamily: 'Matter, sans-serif' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500 font-medium mb-2">Contact Form</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Have a question? <br />Contact us now
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl font-poppins">
              Have questions or need assistance? Our friendly team is ready to provide all the info you need — just get in touch.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-gray-100 text-gray-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 font-poppins">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-gray-100 text-gray-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <a href="mailto:partnerships@futuredesks.in" className="text-sm text-gray-900 font-poppins hover:underline">
                    partnerships@futuredesks.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-gray-100 text-gray-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div className="font-poppins">
                  <a href="tel:+918595669310" className="text-sm text-gray-900 hover:underline block">+91 8595669310</a>
                  <a href="tel:+918923612313" className="text-sm text-gray-900 hover:underline block">+91 8923612313</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
            {submitted ? (
              <div className="p-8 text-center bg-green-50 rounded-xl border border-green-200 text-green-800">
                <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                <p className="text-sm">Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <MailOpen className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Subject"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    required
                    rows={6}
                    placeholder="Message"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition-colors font-medium text-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-md h-[350px] sm:h-[420px] border border-gray-200">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123722734972!2d77.96537597485362!3d27.1776619507776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776d1b3f15c5%3A0x5a2d4a58c3b9b70!2sAwas%20Vikas%20Colony%2C%20Sikandra%2C%20Agra%2C%20Uttar%20Pradesh%20282007!5e0!3m2!1sen!2sin!4v1697797267911!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
