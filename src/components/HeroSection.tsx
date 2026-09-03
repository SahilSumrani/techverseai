import React, { useEffect, useRef } from 'react';

const VideoTile: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.defaultMuted = true;
      v.muted = true;
      v.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
    />
  );
};

export const HeroSection: React.FC = () => {
  // Exact unique media items extracted directly from Superside's index.html (zip package)
  const col1Tiles = [
    { type: 'video', src: 'https://sanity-cdn.superside.com/4fedfabeb8aa20db6b9c9e9366842c2095c1e010.mp4' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/03661b447d641c63cb7dd21f2cd298a700264022-1206x1206.png?w=600&q=95&auto=format' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/bab0442adb666da58fb574fe04383a1996c54a48-1080x1080.png?w=600&q=95&auto=format' },
    { type: 'video', src: 'https://sanity-cdn.superside.com/df1d19432be5ee92a0d6b3fd37d820138eafe513.mp4' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/7e2547c11e2f2a0b78ed659a007a12849ab5d296-800x800.jpg?w=600&q=95&auto=format' },
  ];

  const col2Tiles = [
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/88031f8e9b23fd0f9e4520a0d9e46fa51d61abd8-1920x1920.png?w=600&q=95&auto=format' },
    { type: 'video', src: 'https://sanity-cdn.superside.com/8b7171a3f5fbe86cc455505513a5b91f5131b1f3.mp4' },
    { type: 'image', src: 'https://sanity-cdn.superside.com/d3599eee34f38ce663607182073cfe32ab7375af-768x768.jpg' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/b51ed4d490ea5ca5bccaccf6103cb8cf025af7ac-700x700.jpg?w=600&q=95&auto=format' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/205393f27ca363ad6afeb6c2c0cc59647195ccb0-800x800.png?w=600&q=95&auto=format' },
  ];

  const col3Tiles = [
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/034b3e8a624db58160ceb19e062900bf908651ca-800x800.png?w=600&q=95&auto=format' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/643c7f381241a1d720b8aa5eb09408dab26ce12b-770x985.png?w=600&q=95&auto=format' },
    { type: 'video', src: 'https://sanity-cdn.superside.com/824e8c02701a96a6c157a9bd62930c5e0046dffd.mp4' },
    { type: 'image', src: 'https://cdn.sanity.io/images/k0dlbavy/production/03ecf80e02f200c68247212a39e0f45f20c958cc-1080x1080.png?w=600&q=95&auto=format' },
    { type: 'image', src: 'https://sanity-cdn.superside.com/d93759f4cb24d83184671c30a23f71056fd00101-2334x3666.webp' },
  ];

  const allTilesHorizontal = [...col1Tiles, ...col2Tiles, ...col3Tiles];

  return (
    <section className="font-poppins w-full relative pt-2 pb-10 lg:pt-4 lg:pb-16 min-h-[85vh] flex items-center overflow-visible bg-transparent">
      
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Clean Typography, Description & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left py-4 sm:py-6 z-10">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs mb-5 transition-all hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-tight">
                ⚡ Tech &amp; Creative Partner for Growth
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.12] mb-5">
              <span className="block sm:whitespace-nowrap">Build your Startup</span>
              <span className="block font-semibold text-gray-800">with Techverse</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-sm sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl mb-7 px-1 sm:px-0">
              Scale your in-house product &amp; design capabilities with top 1% engineering talent powered by modern workflows, delivering custom web apps &amp; software fast and affordably.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a href="/customized" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  <span>Let's Explore</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium text-sm sm:text-base rounded-full border border-gray-300 shadow-xs transition-all hover:border-gray-400 flex items-center justify-center">
                  Book a Demo
                </button>
              </a>
            </div>

            {/* Social Proof & Rating Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-200/80 w-full">
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-base">★★★★★</span>
                <span className="font-bold text-gray-900 ml-1">4.9/5</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="font-medium text-gray-700">100% On-Time Delivery</span>
              <span className="text-gray-300">•</span>
              <span className="font-medium text-gray-700">Trusted by <strong className="text-blue-600">5+ Brands</strong></span>
            </div>

          </div>

          {/* Right Side: Responsive Layout (Horizontal Left-to-Right Scrolling on Mobile, Full-Height Vertical Marquee on Desktop) */}
          
          {/* MOBILE VIEW (Horizontal Left-to-Right & Right-to-Left Rows with Matching Speed - Full Bleed Edge-to-Edge) */}
          <div className="lg:hidden w-full mt-4 flex flex-col gap-3 overflow-hidden py-2 -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)]">
            
            {/* Row 1: Left to Right */}
            <div className="w-full overflow-hidden">
              <div className="strip-left flex gap-3">
                {[...allTilesHorizontal, ...allTilesHorizontal].map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="w-36 sm:w-48 h-52 sm:h-64 shrink-0 rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 bg-gray-100"
                  >
                    {tile.type === 'video' ? (
                      <VideoTile src={tile.src} />
                    ) : (
                      <img 
                        src={tile.src} 
                        alt={`Showcase Mobile ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="w-full overflow-hidden">
              <div className="strip-right flex gap-3">
                {[...allTilesHorizontal, ...allTilesHorizontal].map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="w-36 sm:w-48 h-52 sm:h-64 shrink-0 rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 bg-gray-100"
                  >
                    {tile.type === 'video' ? (
                      <VideoTile src={tile.src} />
                    ) : (
                      <img 
                        src={tile.src} 
                        alt={`Showcase Mobile ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* DESKTOP VIEW (Vertical Full-Height Marquee Deck) */}
          <div className="hidden lg:block lg:col-span-6 w-full lg:absolute lg:-top-24 xl:-top-28 lg:right-0 lg:w-[48vw] xl:w-[50vw] lg:h-[calc(100%+115px)] z-0 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 h-full overflow-hidden p-2 bg-transparent relative">
              
              {/* Column 1 - Marquee Up */}
              <div className="flex flex-col gap-4 animate-marquee-up pt-2">
                {[...col1Tiles, ...col1Tiles].map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] shrink-0 h-56 bg-gray-100"
                  >
                    {tile.type === 'video' ? (
                      <VideoTile src={tile.src} />
                    ) : (
                      <img 
                        src={tile.src} 
                        alt={`Superside Hero Item ${idx}`}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Column 2 - Marquee Down */}
              <div className="flex flex-col gap-4 animate-marquee-down">
                {[...col2Tiles, ...col2Tiles].map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] shrink-0 h-56 bg-gray-100"
                  >
                    {tile.type === 'video' ? (
                      <VideoTile src={tile.src} />
                    ) : (
                      <img 
                        src={tile.src} 
                        alt={`Superside Hero Item ${idx}`}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Column 3 - Marquee Up */}
              <div className="flex flex-col gap-4 animate-marquee-up pt-6">
                {[...col3Tiles, ...col3Tiles].map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] shrink-0 h-56 bg-gray-100"
                  >
                    {tile.type === 'video' ? (
                      <VideoTile src={tile.src} />
                    ) : (
                      <img 
                        src={tile.src} 
                        alt={`Superside Hero Item ${idx}`}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
