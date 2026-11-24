import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  externalLink: string;
  tag: string;
  accent: string;
  mobileHeadline: string;
  mobileLabel: string;
  mobileAction: string;
  mobileItems: string[];
}

const projects: Project[] = [
  {
    title: 'DYU Solar',
    description: 'Commercial and industrial solar EPC website for a Delhi NCR energy company.',
    image: '/customized/dyu-solar.webp',
    externalLink: 'https://dyusolar.com/',
    tag: 'Solar EPC · Delhi NCR',
    accent: '#e9ac32',
    mobileHeadline: 'Power the future with DYU SOLAR',
    mobileLabel: 'Solar solutions',
    mobileAction: 'Get Started',
    mobileItems: ['C&I Rooftop Solar', 'Utility-Scale Solar', 'Monitoring & O&M']
  },
  {
    title: 'Cyclen',
    description: 'Adventure-led cycling brand experience built around bikes, riders and community.',
    image: '/customized/cycle-store.webp',
    externalLink: 'https://cycle-website-sage.vercel.app/',
    tag: 'Cycling · Adventure',
    accent: '#ff4a12',
    mobileHeadline: "Let's Ride The ADVANTURE",
    mobileLabel: 'Built for the ride',
    mobileAction: 'Explore Cyclen',
    mobileItems: ['High-Quality Materials', 'On-Demand Repair', 'Cycling Community']
  },
  {
    title: 'University Updates',
    description: 'DU SOL study resources and exam information organized for students.',
    image: '/customized/university-updates.webp',
    externalLink: 'https://universityupdates.co.in/',
    tag: 'Education · DU SOL',
    accent: '#9acb42',
    mobileHeadline: 'Everything you need for DU SOL',
    mobileLabel: 'Student resources',
    mobileAction: 'Find Resources',
    mobileItems: ['Study Material', 'Previous Papers', 'Exam Alerts']
  },
  {
    title: 'Vinayak Jyotish Research Institution',
    description: 'An organization website for a Hindi literary, cultural and Jyotish research institution.',
    image: '/customized/vinayak-jyotish.webp',
    externalLink: 'https://vinayakjyotish.org/',
    tag: 'Hindi · Culture · Jyotish',
    accent: '#ea5b16',
    mobileHeadline: 'वैश्विक साहित्यिक सांस्कृतिक एवं ज्योतिष शोध संस्था',
    mobileLabel: 'साहित्य · ज्योतिष · वास्तु',
    mobileAction: 'संपर्क करें',
    mobileItems: ['हमारे बारे में', 'कार्यक्रम', 'प्लेसमेंट सेल']
  }
];

const MobileConcept: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative mx-auto w-[154px] shrink-0 rounded-[26px] border-[5px] border-slate-900 bg-slate-900 p-[3px] shadow-xl sm:w-[170px]" aria-label={`Responsive layout concept for ${project.title}`}>
    <div className="overflow-hidden rounded-[19px] bg-white">
      <div className="relative flex h-5 items-center justify-center bg-white">
        <span className="h-2.5 w-14 rounded-full bg-slate-900" />
      </div>
      <div className="flex h-[252px] flex-col px-3 pb-3 pt-2 sm:h-[282px]" style={{ background: project.title === 'Cyclen' ? '#090909' : project.title === 'Vinayak Jyotish Research Institution' ? '#18212d' : '#fff' }}>
        <div className="mb-4 flex items-center justify-between">
          <span className="h-2 w-12 rounded-full" style={{ background: project.accent }} />
          <span className="flex flex-col gap-1"><i className="h-[2px] w-4 bg-slate-500"/><i className="h-[2px] w-4 bg-slate-500"/></span>
        </div>
        <span className="mb-2 text-[7px] font-semibold uppercase tracking-widest" style={{ color: project.accent }}>{project.mobileLabel}</span>
        <h4 className={`mb-3 text-[12px] font-bold leading-[1.2] ${project.title === 'Cyclen' || project.title === 'Vinayak Jyotish Research Institution' ? 'text-white' : 'text-slate-900'}`}>
          {project.mobileHeadline}
        </h4>
        <span className="mb-4 inline-flex w-fit rounded-full px-2 py-1 text-[7px] font-semibold text-white" style={{ background: project.accent }}>{project.mobileAction}</span>
        <div className="mt-auto space-y-1.5">
          {project.mobileItems.map((item, i) => (
            <div key={item} className="flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white/95 px-1.5 py-1.5 shadow-sm">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7px] font-bold text-slate-800" style={{ background: `${project.accent}30` }}>0{i + 1}</span>
              <span className="truncate text-[7px] font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-4 items-center justify-center bg-white"><span className="h-1 w-10 rounded-full bg-slate-900" /></div>
    </div>
  </div>
);

export const PortfolioSection: React.FC = () => (
  <section className="overflow-hidden bg-[#f5f6f8] py-20 sm:py-28" aria-labelledby="selected-work-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> Selected projects
          </div>
          <h2 id="selected-work-title" className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Matter, sans-serif' }}>
            Real projects.<br className="hidden sm:block"/> Distinct digital experiences.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-base">
          A closer look at four live websites, each shaped around its own audience, purpose and visual identity.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <article key={project.title} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative overflow-hidden bg-slate-100 p-3 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-white px-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff6058]"/><span className="h-2 w-2 rounded-full bg-[#ffbd2e]"/><span className="h-2 w-2 rounded-full bg-[#28c840]"/>
                  <div className="mx-auto flex h-4 w-[58%] items-center justify-center rounded bg-slate-50 px-2 text-[7px] text-slate-400 sm:text-[9px]">{project.externalLink.replace('https://', '').replace(/\/$/, '')}</div>
                </div>
                <img
                  alt={`${project.title} desktop website UI mockup concept`}
                  src={project.image}
                  width="1000"
                  height="472"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[2.12/1] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
              <div className="absolute bottom-7 right-7 hidden sm:block lg:bottom-8 lg:right-8">
                <MobileConcept project={project}/>
              </div>
              <span className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm sm:left-8 sm:top-8">{project.tag}</span>
              <span className="absolute bottom-6 left-6 rounded-full bg-slate-950/85 px-3 py-1.5 text-[10px] font-medium text-white sm:bottom-8 sm:left-8">Desktop UI concept</span>
              <span className="absolute bottom-8 right-[168px] hidden rounded-full bg-white/90 px-2.5 py-1.5 text-[9px] font-medium text-slate-700 shadow sm:inline-flex lg:bottom-8">Mobile concept</span>
            </div>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
              <div>
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Project 0{index + 1}</span>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl" style={{ fontFamily: 'Matter, sans-serif' }}>{project.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
              <a target="_blank" rel="noopener noreferrer" href={project.externalLink} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-xs font-semibold text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                Visit live site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center sm:mt-16">
        <a href="/customized" className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-700">Explore our project work</a>
      </div>
    </div>
  </section>
);
