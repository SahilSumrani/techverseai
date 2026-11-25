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
import { getAuthLandingPath } from './services/authCallback';

// Dynamic Page imports for Code Splitting (Reduces Unused JS by ~45%)
const CustomizedPage = lazy(() => import('./components/CustomizedPage').then(m => ({ default: m.CustomizedPage })));
const PrebuiltPage = lazy(() => import('./components/PrebuiltPage').then(m => ({ default: m.PrebuiltPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const RefundPage = lazy(() => import('./components/RefundPage').then(m => ({ default: m.RefundPage })));
const AdminPage = lazy(() => import('./components/AdminPage').then(m => ({ default: m.AdminPage })));
const EmployeePortal = lazy(() => import('./components/EmployeePortal').then(m => ({ default: m.EmployeePortal })));

export const App: React.FC = () => {
  const [pathname, setPathname] = useState<string>(() => getAuthLandingPath(window.location.pathname, window.location.hash));
  const prerenderedPaths = new Set([
    '/services/',
    '/website-development-company-delhi/',
    '/website-development-cost-delhi/',
    '/mobile-app-development-company-delhi/',
    '/shopify-development-company-delhi/',
    '/flutter-app-development-company-india/',
    '/ai-chatbot-development-company-india/',
    '/saas-development-company-india/',
    '/app-development-cost-india/'
  ]);

  useEffect(() => {
    const updateTitle = (path: string) => {
      if (path === '/prebuilt') {
        document.title = 'Prebuilt SaaS Delivery in 48–72 Hours | Techverse AI';
      } else if (path === '/customized') {
        document.title = 'Custom Web and App Development | Techverse AI';
      } else if (path === '/about-us') {
        document.title = 'About Techverse AI | Delhi Development Agency';
      } else if (path === '/contact') {
        document.title = 'Contact Techverse AI | Project Enquiries';
      } else if (path === '/privacy') {
        document.title = 'Privacy Policy | Techverse AI';
      } else if (path === '/terms') {
        document.title = 'Terms & Conditions | Techverse AI';
      } else if (path === '/refund') {
        document.title = 'Refund and Cancellation Policy | Techverse AI';
      } else if (path === '/admin') {
        document.title = 'Admin Portal | Techverse AI';
      } else if (path === '/employee') {
        document.title = 'Team Workspace | TechVerse AI';
      } else if (path === '/') {
        document.title = 'Web & App Development Agency in Delhi | Techverse AI';
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
          if (prerenderedPaths.has(href)) return;
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
    if (pathname === '/employee') return <EmployeePortal />;
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
        <header id="top" className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/common/Bg2.webp')" }}>
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
      {pathname !== '/admin' && pathname !== '/employee' && <FloatingActions hasBottomDock={pathname === '/'} />}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        {renderContent()}
      </Suspense>
    </div>
  );
};

export default App;
