import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode; external?: boolean }> = ({ href, children, external = false }) => (
  <a
    href={href}
    className="relative inline-flex items-center overflow-hidden pb-[3px] text-sm font-medium leading-[1.5] tracking-[-0.006em] text-[#425761] opacity-[0.82] transition-opacity hover:opacity-100 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[#79878f] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
  </a>
);

const FooterColumn: React.FC<{ title: string; children: React.ReactNode; description?: string }> = ({ title, children, description }) => (
  <nav aria-label={title} className="min-w-0">
    <h2 className="m-0 max-w-none text-sm font-medium leading-[1.4] tracking-[-0.006em] text-[#687981]">{title}</h2>
    <ul className="mt-[18px] flex list-none flex-col items-start gap-[10px] p-0">{children}</ul>
    {description && <p className="mt-4 max-w-[220px] text-[13px] leading-[1.5] text-[#687981]">{description}</p>}
  </nav>
);

export const Footer: React.FC = () => (
  <>
    <footer className="mx-2 mb-2 w-auto overflow-hidden rounded-[14px] border border-[#d6e1e6] bg-[#f1f8fb] text-[#182a32]" style={{ fontFamily: 'Matter, sans-serif' }}>
      <div className="mx-auto max-w-[1240px] px-5 pb-[88px] pt-14 sm:px-8 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 min-[821px]:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
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

          <FooterColumn title="Contact" description="Web, mobile and AI products for businesses in Delhi NCR and across India.">
            <li><FooterLink href="/contact">Book a call</FooterLink></li>
            <li><FooterLink href="mailto:contact@techverseai.tech">Send a message</FooterLink></li>
            <li><FooterLink href="mailto:contact@techverseai.tech">contact@techverseai.tech</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Elsewhere">
            <li><FooterLink external href="https://www.instagram.com/techverseai00/">Instagram</FooterLink></li>
            <li><FooterLink external href="https://x.com/TechVerseAII">X</FooterLink></li>
            <li><FooterLink external href="https://www.linkedin.com/in/techverse-ai-digital-solution-37b998426/">LinkedIn</FooterLink></li>
          </FooterColumn>
        </div>

        <a href="/" aria-label="Techverse AI home" className="mt-14 block w-full" style={{ aspectRatio: '1556 / 244' }}>
          <svg aria-hidden="true" className="block h-full w-full overflow-visible" viewBox="0 0 1556 244" role="img" preserveAspectRatio="xMidYMid meet">
            <text x="778" y="197" textAnchor="middle" textLength="1325" lengthAdjust="spacingAndGlyphs" fill="#0b171c" fontFamily="Matter, Arial, sans-serif" fontSize="218" fontWeight="600" letterSpacing="-10">TECHVERSE AI</text>
          </svg>
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[13px] leading-[1.5] tracking-[-0.006em] text-[#687981]">
          <span>&copy; {new Date().getFullYear()} Techverse AI</span>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-4">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/refund">Refunds</FooterLink>
          </nav>
        </div>
      </div>
    </footer>

    <div className="fixed inset-x-2 bottom-2 z-40 hidden min-h-10 lg:flex items-center justify-between gap-4 rounded-[14px] border border-[#e3edf1] bg-[#f1f8fb]/95 px-5 py-2 text-[12px] leading-4 text-[#687981] backdrop-blur lg:pl-20 lg:pr-20" style={{ fontFamily: 'Matter, sans-serif' }}>
      <span className="max-w-[40%]">Web, app &amp; AI development partner</span>
      <a href="mailto:contact@techverseai.tech" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[#425761] transition-colors hover:bg-white">contact@techverseai.tech</a>
      <span className="max-w-[40%] text-right">Delhi NCR, working across India</span>
    </div>
  </>
);
