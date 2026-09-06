import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What does Techverse AI do?',
    answer: 'Techverse AI is an AI consulting & web development agency in Delhi. We build custom AI applications, full-stack web and mobile apps, prebuilt SaaS boilerplates, and high-converting e-commerce storefronts for startups and businesses.'
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer: 'We work with both early-stage startups needing rapid product validation (via 48-72h prebuilt SaaS products) and established enterprise brands requiring tailor-made software architecture.'
  },
  {
    question: 'How much does a custom web app cost?',
    answer: 'Custom web application costs depend on scope, features, and API integrations. Prebuilt SaaS deployments start at accessible fixed tiers, while custom builds receive transparent milestone-based proposals after initial discovery.'
  },
  {
    question: 'How long does it take to deliver a pre-built application or website?',
    answer: 'Pre-built applications and websites are delivered within 48 to 72 hours, fully customized with your brand logo, colors, and content.'
  },
  {
    question: 'Do you provide the complete source code after development?',
    answer: 'Yes! You get 100% ownership and full access to the complete source code upon final delivery.'
  },
  {
    question: 'What technologies do you use for development?',
    answer: 'We leverage modern stacks including React, Next.js, Node.js, Python, Tailwind CSS, Supabase, GSAP, and cloud infrastructures like GCP and AWS.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQPage Schema JSON-LD for SEO & AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg_footer.png')",
        fontFamily: 'Matter, sans-serif'
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl text-gray-900 leading-snug font-medium">
            Frequently Asked <br />Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-black rounded-full"></div>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
