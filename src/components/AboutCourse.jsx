import { School, Users2, CalendarDays, Award, ArrowRight, GraduationCap } from "lucide-react";

function AboutCourse() {
  const highlights = [
    {
      icon: <School size={18} className="text-emerald-500" />,
      title: "Fully Online Classes",
      desc: "6 PM, 4 Times a Week"
    },
    {
      icon: <Users2 size={18} className="text-emerald-500" />,
      title: "Open to Students &",
      desc: "Working Professionals"
    },
    {
      icon: <CalendarDays size={18} className="text-emerald-500" />,
      title: "Homework & Reserve Days",
      desc: "Between Classes"
    },
    {
      icon: <Award size={18} className="text-emerald-500" />,
      title: "Fellowship Certificate",
      desc: "Upon Completion"
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900 -mt-0 pt-24 sm:pt-28 md:-mt-28 md:pt-36 pb-20 px-6 md:px-16 max-w-7xl mx-auto relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Left Informational Column */}
        <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between h-full">
          <div className="space-y-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-600 text-xs font-bold tracking-wide bg-emerald-50/50 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ABOUT THE COURSE
            </div>
            
            {/* Section Titles */}
            <h2 className="text-4xl md:text-5xl font-black text-[#020710] tracking-tight leading-tight">
              IISPPR Field <br />
              <span className="text-emerald-600">Research Fellowship</span>
            </h2>
            
            {/* Body Copy */}
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-xl pt-2">
              Designed for students, researchers & working professionals who want to build strong research skills and make an impact in their field.
            </p>
          </div>

          {/* Floating Banner */}
          <div className="bg-[#03111a] text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 w-full shadow-xl relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/20 group/banner">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 transition-transform duration-500 group-hover/banner:scale-105">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Ready to Start Your Research Journey?</h4>
                <p className="text-xs text-gray-400 mt-0.5">Admissions are closing soon for 2026 batch.</p>
              </div>
            </div>
            
            <a 
              href="https://iisppracademy.com/course" 
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-all text-center flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 relative z-10 group"
            >
              Apply Now 
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Info Checklist Panel */}
        <div className="lg:col-span-5 w-full lg:pt-8">
          <div className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl p-6 sm:p-8 space-y-6 text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] group/card">
            
            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div className="flex items-start gap-4 group/item" key={index}>
                  <div className="w-9 h-9 rounded-xl bg-emerald-50/70 border border-emerald-500/5 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 transition-colors group-hover/item:bg-emerald-100/70">
                    {item.icon}
                  </div>
                  <div className="leading-tight pt-0.5">
                    <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Seats Counter */}
            <div className="pt-5 border-t border-gray-100/80 text-center">
              <span className="text-xs font-extrabold text-amber-700 bg-amber-50/80 border border-amber-200/30 px-5 py-2 rounded-full inline-block tracking-wide">
                Only 4 seats remaining!
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutCourse;
