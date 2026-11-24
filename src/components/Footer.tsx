import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode; external?: boolean }> = ({ href, children, external = false }) => (
  <a
    href={href}
    className="inline-flex items-center text-sm leading-[1.5] tracking-[-0.006em] text-[#425761] opacity-80 transition-opacity hover:opacity-100"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
  </a>
);

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <nav aria-label={title} className="min-w-0">
    <h2 className="m-0 text-sm font-medium leading-[1.4] text-[#425761]">{title}</h2>
    <ul className="mt-[18px] flex list-none flex-col items-start gap-[10px] p-0">{children}</ul>
  </nav>
);

export const Footer: React.FC = () => (
  <footer className="w-full border-t border-[#d8e0e4] bg-[#f8fafb] text-[#051a24]" style={{ fontFamily: 'Matter, sans-serif' }}>
    <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-14 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 2xl:gap-x-6">
        <FooterColumn title="Techverse AI">
          <li><FooterLink href="/customized">Work</FooterLink></li>
          <li><FooterLink href="/about-us">About</FooterLink></li>
          <li><FooterLink href="/prebuilt">Prebuilt SaaS</FooterLink></li>
          <li><FooterLink href="/#faq">FAQs</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Product">
          <li><FooterLink href="/website-development-company-delhi/">Website development</FooterLink></li>
          <li><FooterLink href="/mobile-app-development-company-delhi/">Mobile apps</FooterLink></li>
          <li><FooterLink href="/saas-development-company-india/">SaaS development</FooterLink></li>
          <li><FooterLink href="/ai-chatbot-development-company-india/">AI systems</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Brand and launch">
          <li><FooterLink href="/shopify-development-company-delhi/">Shopify stores</FooterLink></li>
          <li><FooterLink href="/customized">Brand identity</FooterLink></li>
          <li><FooterLink href="/prebuilt">Launch-ready products</FooterLink></li>
          <li><FooterLink href="/contact">Project launch support</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Industries">
          <li><FooterLink href="/customized">Startups</FooterLink></li>
          <li><FooterLink href="/about-us">Growing businesses</FooterLink></li>
          <li><FooterLink external href="https://universityupdates.co.in/">Education</FooterLink></li>
          <li><FooterLink external href="https://dyusolar.com/">Clean energy</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Tools">
          <li><FooterLink href="/prebuilt">Prebuilt SaaS</FooterLink></li>
          <li><FooterLink href="/#tech-stack">Technology stack</FooterLink></li>
          <li><FooterLink href="/website-development-cost-delhi/">Website cost guide</FooterLink></li>
          <li><FooterLink href="/app-development-cost-india/">App cost guide</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Contact">
          <li><FooterLink href="/contact">Book a call</FooterLink></li>
          <li><FooterLink href="mailto:contact@techverseai.tech">Send a message</FooterLink></li>
          <li><FooterLink external href="https://wa.me/918700543448">WhatsApp</FooterLink></li>
          <li><FooterLink href="tel:+918700543448">+91 87005 43448</FooterLink></li>
        </FooterColumn>

        <FooterColumn title="Elsewhere">
          <li><FooterLink external href="https://www.instagram.com/techverseai00/">Instagram</FooterLink></li>
          <li><FooterLink external href="https://x.com/TechVerseAII">X</FooterLink></li>
          <li><FooterLink external href="https://www.linkedin.com/in/techverse-ai-digital-solution-37b998426/">LinkedIn</FooterLink></li>
        </FooterColumn>
      </div>

      <a href="/" aria-label="Techverse AI home" className="mt-14 block overflow-hidden border-b border-[#d8e0e4] pb-2 text-center text-[clamp(36px,15.5vw,244px)] font-semibold leading-[0.9] tracking-[-0.085em] text-[#051a24] sm:mt-14">
        TECHVERSE AI
      </a>

      <div className="mt-6 flex flex-col gap-4 text-[13px] leading-[1.5] text-[#687981] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Techverse AI</span>
        <nav aria-label="Legal" className="flex flex-wrap items-center gap-4">
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/refund">Refunds</FooterLink>
        </nav>
      </div>
    </div>
  </footer>
);
