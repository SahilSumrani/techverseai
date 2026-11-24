import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode; external?: boolean }> = ({ href, children, external = false }) => (
  <a
    href={href}
    className="inline-flex min-h-7 items-center text-[13px] leading-5 text-[#425761] transition-colors hover:text-blue-700"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
  </a>
);

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <nav aria-label={title} className="min-w-0">
    <h2 className="text-[13px] font-semibold tracking-tight text-[#425761]">{title}</h2>
    <ul className="mt-4 space-y-2.5">{children}</ul>
  </nav>
);

export const Footer: React.FC = () => (
  <>
    <section className="bg-[#EBF3F7] px-4 pb-10 pt-6 sm:px-6 lg:px-8" aria-labelledby="footer-cta-title">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1680px] flex-col gap-7 rounded-[28px] bg-[#051A24] px-6 py-9 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-11">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">Techverse AI</span>
          <h2 id="footer-cta-title" className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ fontFamily: 'Matter, sans-serif' }}>
            Have a project in mind?
          </h2>
        </div>
        <a href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#051A24] transition hover:bg-[#E0EBF0]">
          Tell us about it <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <footer className="w-full border-t border-[#C8D5DB] bg-[#EBF3F7] text-[#051A24]" style={{ fontFamily: 'Matter, sans-serif' }}>
      <div className="mx-auto max-w-7xl 2xl:max-w-[1680px] px-5 pb-6 pt-12 sm:px-6 sm:pt-14 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 xl:gap-x-5">
          <FooterColumn title="Techverse AI">
            <li><FooterLink href="/">Home</FooterLink></li>
            <li><FooterLink href="/about-us">About us</FooterLink></li>
            <li><FooterLink href="/customized">Custom development</FooterLink></li>
            <li><FooterLink href="/prebuilt">Prebuilt SaaS</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Web &amp; apps">
            <li><FooterLink href="/website-development-company-delhi/">Website development</FooterLink></li>
            <li><FooterLink href="/mobile-app-development-company-delhi/">Mobile apps</FooterLink></li>
            <li><FooterLink href="/flutter-app-development-company-india/">Flutter apps</FooterLink></li>
            <li><FooterLink href="/shopify-development-company-delhi/">Shopify</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Software">
            <li><FooterLink href="/saas-development-company-india/">SaaS development</FooterLink></li>
            <li><FooterLink href="/ai-chatbot-development-company-india/">AI chatbots</FooterLink></li>
            <li><FooterLink href="/website-development-cost-delhi/">Website cost guide</FooterLink></li>
            <li><FooterLink href="/app-development-cost-india/">App cost guide</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Selected work">
            <li><FooterLink external href="https://dyusolar.com/">DYU Solar</FooterLink></li>
            <li><FooterLink external href="https://cycle-website-sage.vercel.app/">Cyclen</FooterLink></li>
            <li><FooterLink external href="https://universityupdates.co.in/">University Updates</FooterLink></li>
            <li><FooterLink external href="https://vinayakjyotish.org/">Vinayak Jyotish</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Contact">
            <li><FooterLink href="/contact">Project enquiries</FooterLink></li>
            <li><FooterLink href="mailto:contact@techverseai.tech">contact@techverseai.tech</FooterLink></li>
            <li><FooterLink external href="https://wa.me/918700543448">WhatsApp</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Elsewhere">
            <li><FooterLink external href="https://www.instagram.com/techverseai00/">Instagram</FooterLink></li>
            <li><FooterLink external href="https://x.com/TechVerseAII">X</FooterLink></li>
            <li><FooterLink external href="https://www.linkedin.com/in/techverse-ai-digital-solution-37b998426/">LinkedIn</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Legal">
            <li><FooterLink href="/terms">Terms &amp; Conditions</FooterLink></li>
            <li><FooterLink href="/privacy">Privacy policy</FooterLink></li>
            <li><FooterLink href="/refund">Refund policy</FooterLink></li>
          </FooterColumn>
        </div>

        <a href="/" aria-label="Techverse AI home" className="mt-14 block select-none overflow-hidden border-b border-[#C8D5DB] pb-5 text-center text-[clamp(52px,10.5vw,148px)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#051A24] sm:mt-16">
          TECHVERSE AI
        </a>

        <div className="flex flex-col gap-3 pt-5 text-xs text-[#425761] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Techverse AI</span>
          <a href="#top" className="inline-flex min-h-8 items-center gap-1 transition-colors hover:text-blue-700">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  </>
);
