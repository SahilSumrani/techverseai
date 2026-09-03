import React, { useState } from 'react';
import { User, Phone, MailOpen, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { saveQuery } from '../services/queryService';

interface GetInTouchSectionProps {
  sourceTitle?: string;
  defaultSubject?: string;
}

export const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
  sourceTitle = 'Prebuilt SaaS',
  defaultSubject = 'Inquiry regarding Prebuilt Solutions'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: defaultSubject,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveQuery({
      ...formData,
      source: sourceTitle
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: defaultSubject,
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 my-12" style={{ fontFamily: 'Matter, sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-blue-300 font-medium text-sm mb-3">
            Get In Touch Direct
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to Launch Your Prebuilt Solution?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-poppins">
            Fill out the quick form below to connect directly with our deployment engineers and get instant access &amp; consultation.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-10 text-center flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
              <p className="text-gray-300 max-w-md font-poppins text-sm">
                Your inquiry has been directly dispatched to our admin dashboard. Our expert team will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-poppins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-poppins"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <MailOpen className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-poppins"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Subject *"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-poppins"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you? Describe your requirement... *"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none font-poppins"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex justify-center sm:justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
