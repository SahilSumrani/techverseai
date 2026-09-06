import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FloatingActions } from './components/FloatingActions';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesGridSection } from './components/ServicesGridSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { TickerBanner } from './components/TickerBanner';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

// Dynamic Page imports for Code Splitting (Reduces Unused JS by ~45%)
const CustomizedPage = lazy(() => import('./components/CustomizedPage').then(m => ({ default: m.CustomizedPage })));
const PrebuiltPage = lazy(() => import('./components/PrebuiltPage').then(m => ({ default: m.PrebuiltPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const RefundPage = lazy(() => import('./components/RefundPage').then(m => ({ default: m.RefundPage })));
const AdminPage = lazy(() => import('./components/AdminPage').then(m => ({ default: m.AdminPage })));

export const App: React.FC = () => {
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    const updateTitle = (path: string) => {
      if (path === '/prebuilt') {
        document.title = 'Prebuilt SaaS Solutions & Ready-to-Deploy Products | Techverse AI';
      } else if (path === '/customized') {
        document.title = 'Custom AI Web Applications & Software Development | Techverse AI';
      } else if (path === '/about-us') {
        document.title = 'About Us — AI Consulting & Development Agency | Techverse AI';
      } else if (path === '/contact') {
        document.title = 'Contact Us | Techverse AI Delhi';
      } else if (path === '/privacy') {
        document.title = 'Privacy Policy | Techverse AI';
      } else if (path === '/terms') {
        document.title = 'Terms & Conditions | Techverse AI';
      } else if (path === '/refund') {
        document.title = 'Refund Policy | Techverse AI';
      } else if (path === '/admin') {
        document.title = 'Admin Portal | Techverse AI';
      } else {
        document.title = 'AI Consulting & Development Company in Delhi | Techverse AI';
      }
    };

    updateTitle(pathname);

    const handlePopState = () => {
      const newPath = window.location.pathname;
      setPathname(newPath);
      updateTitle(newPath);
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setPathname(href);
          updateTitle(href);
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  const renderContent = () => {
    if (pathname === '/admin') return <AdminPage />;
    if (pathname === '/terms') return <TermsPage />;
    if (pathname === '/privacy') return <PrivacyPage />;
    if (pathname === '/refund') return <RefundPage />;
    if (pathname === '/customized') return <CustomizedPage />;
    if (pathname === '/prebuilt') return <PrebuiltPage />;
    if (pathname === '/contact') return <ContactPage />;
    if (pathname === '/about-us') return <AboutPage />;

    // Homepage Render
    return (
      <div className="relative">
        <header className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/common/Bg2.webp')" }}>
          <Navbar />
        </header>

        <main id="main-content">
          {/* 1. Hero Section with High-Priority LCP Image */}
          <div className="w-full bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('/common/Bg2.webp')" }}>
            <img
              src="/common/Bg2.webp"
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
            />
            <HeroSection />
          </div>

          {/* 2. Services Grid */}
          <ServicesGridSection />

          {/* 3. Case Studies / Selected Work */}
          <PortfolioSection />

          {/* 4. Process / How We Work */}
          <ProcessSection />

          {/* 5. Tech Stack */}
          <TechStackSection />

          {/* Brand Banner */}
          <TickerBanner />

          {/* 7. FAQ */}
          <FaqSection />
        </main>

        {/* 8. Contact & Footer */}
        <Footer />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white">
      <FloatingActions />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        {renderContent()}
      </Suspense>
    </div>
  );
};

export default App;
