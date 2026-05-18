import { useState } from "react";
import { Brain, Globe, Rocket, MessageSquare, ChevronRight, BookOpen, GraduationCap, Award, Compass } from "lucide-react";

function Different() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTrack, setActiveTrack] = useState("learning");

  const cards = [
    {
      id: "01",
      icon: <Brain size={24} />,
      title: "Critical, Not Just Technical",
      shortDesc: "We look beyond standard code syntaxes and parsing metrics.",
      longDesc: "Our core framework helps you think critically, analyze deeply, and solve real-world research problems. You will design systemic research blueprints that translate raw numbers into actionable policy executions.",
      color: "from-emerald-500/20 to-emerald-500/0",
      iconColor: "text-emerald-500 bg-emerald-50"
    },
    {
      id: "02",
      icon: <Globe size={24} />,
      title: "Global & Local Lens",
      shortDesc: "Understand global trends and how they impact everyday life.",
      longDesc: "Master cross-border methodologies used by international think tanks. Learn how to map macroeconomic indicators directly down to community-level urban and rural pilot programs.",
      color: "from-amber-500/20 to-amber-500/0",
      iconColor: "text-amber-500 bg-amber-50"
    },
    {
      id: "03",
      icon: <Rocket size={24} />,
      title: "Practical Skills You Can Use",
      shortDesc: "Hands-on modules, real datasets, and applied projects.",
      longDesc: "Skip outdated textbook theories. We train you to build production-ready data pipelines, defend your data arrays in front of stakeholder panels, and pitch persuasive policy recommendations.",
      color: "from-blue-500/20 to-blue-500/0",
      iconColor: "text-blue-500 bg-blue-50"
    },
    {
      id: "04",
      icon: <MessageSquare size={24} />,
      title: "Learn to Communicate With Impact",
      shortDesc: "Translate complex data findings into compelling narratives.",
      longDesc: "Research is only powerful when communicated well. We teach you how to write executive data summaries, build intuitive visualizations, and present data clearly to non-technical leaders and decision makers.",
      color: "from-purple-500/20 to-purple-500/0",
      iconColor: "text-purple-500 bg-purple-50"
    }
  ];

  const trackContent = {
    learning: {
      title: "Structured Academic Execution",
      metric: "36–50 Hours of Content",
      desc: "Dive into rigorous, masterfully paced learning tracks optimized for heavy retention. This curriculum sharpens your professional edge by concentrating entirely on fundamental data literacy, advanced statistics, and modern AI tool integrations.",
      deliverable: "Complete deep-dive mastery certificates across core statistical and analytical nodes."
    },
    capstone: {
      title: "Applied Fieldwork & Capstone Execution",
      metric: "Real-World Practice Projects",
      desc: "Step away from simple simulations. You will conceptualize, design, and run a comprehensive applied capstone project using dirty, active datasets to solve a real socioeconomic or community problem.",
      deliverable: "A comprehensive, publication-ready research paper and an analytical data portfolio."
    },
    exposure: {
      title: "Global Publication Channels",
      metric: "Cross-Border Opportunities",
      desc: "Gain international visibility. We provide direct scaffolding, formatting assistance, and structural reviews to help you submit your capstone research outputs into premier international journals and think-tank networks.",
      deliverable: "Journal formatting review and structural feedback matrices from senior editors."
    },
    mentorship: {
      title: "Policy Expert Advisorship",
      metric: "Gold Medal Recognition Hub",
      desc: "Work side-by-side with veteran policy experts and industry practitioners who have spent decades shaping real legislation. Outstanding scholars compete for prestigious Gold Medal distinctions upon final batch review.",
      deliverable: "Direct validation reviews and exclusive nomination pathways for outstanding thesis projects."
    }
  };

  return (
    <div className="w-full bg-[#fdfbf7] text-gray-900 py-16 text-center">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-block text-xs font-bold text-emerald-700 tracking-widest uppercase bg-emerald-50 border border-emerald-200/50 px-3 py-1 rounded-full">
            The IISPPR Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
            What Makes This <span className="text-emerald-600">Course Different?</span>
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Interact with our core program pillars and click through the program highlights matrix tracking hubs below.
          </p>
        </div>

        {/* Sliding Card Deck */}
        <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[380px] lg:h-[380px] items-stretch">
          {cards.map((card, idx) => {
            const isExpanded = hoveredCard === idx;
            const isAnyHovered = hoveredCard !== null;
            
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-3xl border border-gray-100 p-6 flex flex-col justify-between text-left transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer ${
                  isExpanded 
                    ? "lg:flex-[2.5] bg-[#03111a] text-white border-transparent shadow-xl" 
                    : isAnyHovered 
                      ? "lg:flex-[0.8] bg-white opacity-60 scale-[0.98]" 
                      : "lg:flex-[1] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.01)]"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-opacity duration-500 pointer-events-none ${isExpanded ? "opacity-100" : "opacity-0"}`} />

                <div className="relative z-10 space-y-4 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${isExpanded ? "bg-white/10 text-white" : card.iconColor}`}>
                      {card.icon}
                    </div>
                    <span className={`text-xs font-black font-mono transition-colors ${isExpanded ? "text-emerald-400" : "text-gray-300"}`}>
                      {card.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-base font-black tracking-tight transition-colors duration-300 ${isExpanded ? "text-white text-lg" : "text-gray-900"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-xs text-gray-500 font-light leading-relaxed transition-all duration-300 max-w-[220px] ${isExpanded ? "lg:opacity-0 lg:max-h-0 lg:overflow-hidden" : "opacity-100"}`}>
                      {card.shortDesc}
                    </p>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out text-xs leading-relaxed text-gray-300 font-light ${isExpanded ? "opacity-100 max-h-[200px] pt-1" : "opacity-0 max-h-0 overflow-hidden pointer-events-none"}`}>
                    {card.longDesc}
                  </div>
                </div>

                <div className={`w-full flex items-center justify-between border-t pt-4 mt-6 text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 relative z-10 ${isExpanded ? "border-white/10 text-emerald-400" : "border-gray-50 text-gray-400"}`}>
                  <span>{isExpanded ? "Active Track" : "Hover to expand"}</span>
                  <ChevronRight size={12} className={`transition-transform duration-500 ${isExpanded ? "rotate-180 text-emerald-400" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Matrix Area */}
        <div className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 md:p-8 space-y-8 text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-100 pb-6">
            <button onClick={() => setActiveTrack("learning")} className={`flex flex-col items-center md:items-start p-4 rounded-2xl transition-all text-center md:text-left group ${activeTrack === "learning" ? "bg-emerald-50/60 border border-emerald-500/20" : "hover:bg-gray-50/80 border border-transparent"}`}>
              <div className={`p-2.5 rounded-xl mb-3 transition-colors ${activeTrack === "learning" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}><BookOpen size={18} /></div>
              <h4 className="text-xs font-bold text-gray-900">Structured Learning</h4>
            </button>
            <button onClick={() => setActiveTrack("capstone")} className={`flex flex-col items-center md:items-start p-4 rounded-2xl transition-all text-center md:text-left group ${activeTrack === "capstone" ? "bg-emerald-50/60 border border-emerald-500/20" : "hover:bg-gray-50/80 border border-transparent"}`}>
              <div className={`p-2.5 rounded-xl mb-3 transition-colors ${activeTrack === "capstone" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}><GraduationCap size={18} /></div>
              <h4 className="text-xs font-bold text-gray-900">Applied Capstone</h4>
            </button>
            <button onClick={() => setActiveTrack("exposure")} className={`flex flex-col items-center md:items-start p-4 rounded-2xl transition-all text-center md:text-left group ${activeTrack === "exposure" ? "bg-emerald-50/60 border border-emerald-500/20" : "hover:bg-gray-50/80 border border-transparent"}`}>
              <div className={`p-2.5 rounded-xl mb-3 transition-colors ${activeTrack === "exposure" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}><Compass size={18} /></div>
              <h4 className="text-xs font-bold text-gray-900">Global Publication</h4>
            </button>
            <button onClick={() => setActiveTrack("mentorship")} className={`flex flex-col items-center md:items-start p-4 rounded-2xl transition-all text-center md:text-left group ${activeTrack === "mentorship" ? "bg-emerald-50/60 border border-emerald-500/20" : "hover:bg-gray-50/80 border border-transparent"}`}>
              <div className={`p-2.5 rounded-xl mb-3 transition-colors ${activeTrack === "mentorship" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}><Award size={18} /></div>
              <h4 className="text-xs font-bold text-gray-900">Expert Mentorship</h4>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50/40 p-6 rounded-2xl border border-gray-100/50">
            <div className="md:col-span-8 space-y-3">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono block">{trackContent[activeTrack].metric}</span>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">{trackContent[activeTrack].title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">{trackContent[activeTrack].desc}</p>
            </div>
            <div className="md:col-span-4 bg-white border border-gray-100 p-4 rounded-xl flex flex-col justify-between h-full shadow-sm">
              <div>
                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Program Target</h5>
                <p className="text-xs text-gray-800 font-medium leading-normal">{trackContent[activeTrack].deliverable}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <a href="https://iisppracademy.com/course" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#03111a] hover:bg-[#061e2e] text-white text-xs font-semibold rounded-xl transition-all shadow-md">
              Join the Fellowship &rarr;
            </a>
          </div>
        </div>

        {/* Philosophy Panel */}
        <div className="bg-gradient-to-r from-[#03111a] via-[#051c2b] to-[#03111a] text-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/5 text-center max-w-5xl mx-auto mt-8">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">Why This Program <span className="text-amber-400">Matters</span></h3>
          <p className="text-sm md:text-base text-gray-200 font-light italic leading-relaxed px-4 md:px-8 mt-4">
            "In a world where policy decisions shape education, governance, and climate action, IISPPR empowers learners to decode complex systems, apply data responsibly, and communicate insights that create real-world impact."
          </p>
        </div>

      </div>
    </div>
  );
}

export default Different;