import { Play, Compass, ClipboardCheck, BookOpen, Medal } from "lucide-react";
import lady from "../images/Lady.png";

function Hero() {
  return (
    <div className="w-full relative pb-16 group">
      {/* Main Responsive Grid Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 pb-20">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
          <div className="text-xs font-bold text-[#00a86b] tracking-widest uppercase">
            Excellence in Research
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            IISPPR Field & <br />
            <span className="text-emerald-500">Research</span> Fellowship
          </h1>
          
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
            Shape the future with data-driven insights and impactful research.
          </p>

          {/* Social Proof Row */}
          <div className="flex items-center justify-center lg:justify-start gap-3 py-2">
            <div className="flex -space-x-2.5">
              <img className="w-8 h-8 rounded-full border-2 border-[#020710] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="scholar" />
              <img className="w-8 h-8 rounded-full border-2 border-[#020710] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="scholar" />
              <img className="w-8 h-8 rounded-full border-2 border-[#020710] object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=60&q=80" alt="scholar" />
              <img className="w-8 h-8 rounded-full border-2 border-[#020710] object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60&q=80" alt="scholar" />
            </div>
            <p className="text-xs text-gray-400 text-left">
              Join <span className="text-white font-bold">500+ policy experts & researchers</span>
            </p>
          </div>
          
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a 
              href="https://iisppracademy.com/course" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#00a86b] text-white font-semibold rounded-xl text-sm hover:bg-[#008f5a] transition-all flex items-center justify-center gap-2 text-center"
            >
              Explore Course &rarr;
            </a>
            <a
              href="https://iisppracademy.com/curriculum"
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/10 text-white font-medium rounded-xl text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              View Curriculum
            </a>
          </div>
        </div>

        {/* Right Side Complex Graphic Canvas */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end w-full min-h-[480px] mt-8 lg:mt-0">
          
          {/* ULTRA SMOOTH & SLOW GLOW:
            - transition-all duration-1000 ease-in-out creates a beautifully slow, 1-second fading transition.
            - base opacity is dropped to 10% so the bloom forward is distinct.
          */}
          <div className="absolute w-72 h-72 rounded-full bg-[#f5b335] opacity-10 group-hover:opacity-100 blur-[65px] shadow-[0_0_60px_30px_#f5b335,0_0_140px_70px_rgba(245,179,53,0.6),0_0_240px_110px_rgba(245,179,53,0.3)] pointer-events-none top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out"></div>
          
          {/* Center Image Wrapper */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:mr-12 z-10 flex items-center justify-center">
            
            {/* FIX: OUTLINE WIPEOUT
              Wrapping the image in an overflow-hidden mask guarantees that no native image borders 
              or artifact outline rings escape and show up against your dark background.
            */}
            <div className="w-full h-full rounded-full overflow-hidden bg-transparent shadow-2xl relative z-10">
              <img 
                src={lady} 
                alt="IISPPR Fellows Portrait" 
                className="w-full h-full object-cover border-0 outline-none select-none" 
              />
            </div>

            {/* Floating Vector Embedded Badges */}
            
            {/* 1. Fieldwork - Top-Left */}
            <div className="absolute -top-6 -left-12 bg-[#0b1221]/85 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2.5 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 z-20 min-w-[160px] hidden sm:flex text-left">
              <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0">
                <Compass size={18} />
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-white">Fieldwork</h4>
                <p className="text-[10px] text-gray-400 whitespace-nowrap">Real world impact</p>
              </div>
            </div>

            {/* 2. Policy Impact - Top-Right */}
            <div className="absolute -top-4 -right-12 bg-[#0b1221]/85 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2.5 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 z-20 min-w-[160px] hidden sm:flex text-left">
              <div className="p-1.5 bg-sky-500/10 text-sky-400 rounded-lg shrink-0">
                <ClipboardCheck size={18} />
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-white">Policy Impact</h4>
                <p className="text-[10px] text-gray-400 whitespace-nowrap">Drive meaningful change</p>
              </div>
            </div>

            {/* 3. Publication - Bottom-Left */}
            <div className="absolute bottom-6 -left-16 bg-[#0b1221]/85 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2.5 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 z-20 min-w-[160px] hidden sm:flex text-left">
              <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                <BookOpen size={18} />
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-white">Publication</h4>
                <p className="text-[10px] text-gray-400 whitespace-nowrap">Opportunities</p>
              </div>
            </div>

            {/* 4. Gold Medal - Bottom-Right */}
            <div className="absolute bottom-8 -right-16 bg-[#0b1221]/85 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2.5 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 z-20 min-w-[160px] hidden sm:flex text-left">
              <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                <Medal size={18} />
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-white">Gold Medal</h4>
                <p className="text-[10px] text-gray-400 whitespace-nowrap">Recognition</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Overlapping Card Deck Overlay */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30 pt-4 px-4 sm:px-0">
        <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-[#00a86b] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Live Interactive Classes</h3>
            <p className="text-[11px] text-gray-500 max-w-[200px]">4x weekly live sessions with experts</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Research Focused</h3>
            <p className="text-[11px] text-gray-500 max-w-[200px]">Practical & real-world approach</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Certification</h3>
            <p className="text-[11px] text-gray-500 max-w-[200px]">Earn upon successful completion</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Hero;