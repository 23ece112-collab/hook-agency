import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="scroll-reveal reveal-hidden">
          <div className="flex flex-wrap gap-4 mb-8">
            {/* Instagram */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            {/* LinkedIn */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </div>
            {/* X */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            {/* TikTok */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </div>
            {/* Facebook */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8">
            Short form <br /> done <span className="serif-italic font-normal text-gray-400 dark:text-gray-500">right</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed">
            We combine content, management, and paid media to help brands grow and convert on the social platforms that matter most to you.
          </p>
          <button className="bg-primary dark:bg-white dark:text-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Get in touch
          </button>
        </div>
        <div className="relative scroll-reveal reveal-hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] max-w-sm mx-auto group bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="https://res.cloudinary.com/dkxe8h4cs/video/upload/v1770231511/8w8uZsyTiiDeK6O5_cwarkp.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-spin-slow">
                <span className="material-icons-outlined text-black">phishing</span>
              </div>
            </div>
            <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-all">
              <span className="material-icons-outlined text-white">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;