import React, { useState, useEffect } from 'react';
import { FloatingActions } from './components/FloatingActions';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TickerBanner } from './components/TickerBanner';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CustomizedPage } from './components/CustomizedPage';
import { PrebuiltPage } from './components/PrebuiltPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { RefundPage } from './components/RefundPage';
import { AdminPage } from './components/AdminPage';

export const App: React.FC = () => {
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    const updateTitle = (path: string) => {
      switch (path) {
        case '/prebuilt':
          document.title = 'Prebuilt SaaS Solutions & Ready-to-Deploy Products | Techverse AI';
          break;
        case '/customized':
          document.title = 'Custom AI Web Applications & Software Development | Techverse AI';
          break;
        case '/about-us':
          document.title = 'About Us | Techverse AI';
          break;
        case '/contact':
          document.title = 'Contact Us | Techverse AI';
          break;
        case '/privacy':
          document.title = 'Privacy Policy | Techverse AI';
          break;
        case '/terms':
          document.title = 'Terms & Conditions | Techverse AI';
          break;
        case '/refund':
          document.title = 'Refund Policy | Techverse AI';
          break;
        case '/admin':
          document.title = 'Admin Portal | Techverse AI';
          break;
        default:
          document.title = 'Techverse AI | Scalable AI-Powered Web Applications & Prebuilt SaaS Solutions';
          break;
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
        if (
          href &&
          (href === '/customized' ||
            href === '/prebuilt' ||
            href === '/contact' ||
            href === '/about-us' ||
            href === '/admin' ||
            href === '/terms' ||
            href === '/privacy' ||
            href === '/refund' ||
            href === '/')
        ) {
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

  if (pathname === '/admin') {
    return <AdminPage />;
  }

  if (pathname === '/terms') {
    return <TermsPage />;
  }

  if (pathname === '/privacy') {
    return <PrivacyPage />;
  }

  if (pathname === '/refund') {
    return <RefundPage />;
  }

  if (pathname === '/customized') {
    return <CustomizedPage />;
  }

  if (pathname === '/prebuilt') {
    return <PrebuiltPage />;
  }

  if (pathname === '/contact') {
    return <ContactPage />;
  }

  if (pathname === '/about-us') {
    return <AboutPage />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white">
      {/* Floating Instagram & WhatsApp Links */}
      <FloatingActions />

      {/* Main Website Sections */}
      <div className="relative">
        {/* Full Header & Hero Grid Container covering the top screen completely */}
        <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/common/Bg2.png')" }}>
          <Navbar />
          <HeroSection />
        </div>
        <FeaturesSection />
        <PortfolioSection />
        <TickerBanner />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
