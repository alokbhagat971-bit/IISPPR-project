import { useState } from "react";
import {
  ShieldCheck, Microscope, Milestone, Compass,
  Users, BookOpen, BarChart2, Globe, X,
  GraduationCap, BookMarked
} from "lucide-react";

function Faculty() {
  const [selected, setSelected] = useState(null);

  const corePillars = [
    { icon: <ShieldCheck size={18} />, title: "Expert Guidance", desc: "From leading academicians & researchers" },
    { icon: <Microscope size={18} />, title: "Real World Exposure", desc: "Work on live research projects" },
    { icon: <Milestone size={18} />, title: "Personalized Mentorship", desc: "One-on-one mentorship and feedback" },
    { icon: <Compass size={18} />, title: "Global Perspective", desc: "Learn with a global research outlook" }
  ];

  const facultyData = [
    {
      pic: "https://iisppracademy.com/Prof.%20(Dr.)%20Areiba%20Arif.webp",
      name: "Dr. Areiba Arif",
      title: "ASSISTANT PROFESSOR",
      institution: "Jindal Global Business School",
      expertise: ["Health Policy", "Policy Implementation", "Mental Health", "Aging & Migration", "Health Economics"],
      biography: "Dr. Areiba Arif specializes in public policy and management. Her doctoral research at IIM Ahmedabad focused on policy implementation with an emphasis on health systems and health workers in India's national primary health reform. Her broader scholarly interests include health policy, policy implementation, mental health, aging, migration, equity, and access among vulnerable populations. Prior to academia, she worked as an Analyst in Health Economics and Outcomes Research, contributing to health technology assessment and real-world evidence generation.",
      publications: [
        "Arif, A., & Chandwani, R. (2024). Online social support exchange… Journal of Policy Research in Tourism, Leisure and Events.",
        "Arif, A., & Turaga, R. M. R. (2023). Covid-19 Cure Perceptions… Journal of Communication in Healthcare."
      ],
      qualifications: [
        "Ph.D. in Public Policy, Indian Institute of Management Ahmedabad",
        "Master of Public Health (Health Policy, Economics and Finance), Tata Institute of Social Sciences, Mumbai",
        "Bachelor of Dental Surgery, Aligarh Muslim University, Aligarh"
      ],
    },
    {
      pic: "https://iisppracademy.com/Syed-Shariq-Husain.jpg",
      name: "Prof. (Dr.) Syed Shariq Husain",
      title: "ASSISTANT PROFESSOR",
      institution: "Jindal School of Government and Public Policy",
      expertise: ["Complex Systems Dynamics", "Data-Driven Complex Systems", "Computational Social Science", "Network Science", "Data Science & Public Policy"],
      biography: "Prof. (Dr.) Syed Shariq Husain's work focuses on data-driven complex systems, nonlinear dynamics, network science, and machine learning applied to socio-economic and public policy domains. His academic contributions span teaching and research in complex networks, computational social science, and public policy analytics. Prior to academia, he engaged in research training at institutions including the Indian Institute of Management Ahmedabad, IIT Kanpur, and ICTS-TIFR. His interdisciplinary research leverages data science and dynamical systems to understand structure, interaction, and emergence in complex socio-economic systems.",
      courses: [
        "Science & Technology Policy",
        "Data Science with Python",
        "Complexity and Public Policy",
        "Econometrics & Data Management"
      ],
      qualifications: [
        "Ph.D., School of Computational and Integrative Sciences, Jawaharlal Nehru University, India",
        "M.Sc., Jamia Millia Islamia, India"
      ],
    },
    {
      pic: "https://iisppracademy.com/Dr.%20Faiz%20Noor%20Khan%20Yusufi.png",
      name: "Dr. Faiz Noor Khan Yusufi",
      title: "ASSISTANT PROFESSOR",
      institution: "Aligarh Muslim University",
      expertise: ["Statistical Data Analysis", "Biostatistics", "Operations Research", "Data Analytics", "Applied Statistics"],
      biography: "Dr. Faiz Noor Khan Yusufi is an academic in statistics with expertise in statistical data analysis, biostatistics, and operations research. He has professional experience as a data analyst for a non-profit program and has published research in reputable journals. His work includes joint research projects granted patents and invited lectures on statistical data analysis.",
      qualifications: [
        "Ph.D. in Statistics (Biostatistics specialization) — 2020",
        "M.Sc. in Statistics — National University of Singapore (2013)",
        "B.Sc. in Statistics — Aligarh Muslim University (2009)"
      ]
    }
  ];

  return (
    <div className="w-full bg-[#020710] text-white pt-32 pb-0">

      <style>{`
        @keyframes floatCap {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.30; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes pulsePlatform {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.65; }
        }
        @keyframes badgeBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawerIn {
          from { opacity: 0; transform: scale(0.95) translateY(24px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* Cap animations */
        .cap-wrapper:hover .cap-svg {
          animation: floatCap 1.8s ease-in-out infinite;
          filter: drop-shadow(0 0 32px rgba(52,211,153,0.9));
        }
        .cap-wrapper:hover .ring-outer {
          animation: spinRing 8s linear infinite;
          border-color: rgba(52,211,153,0.6);
        }
        .cap-wrapper:hover .ring-inner {
          animation: spinRing 5s linear infinite reverse;
          border-color: rgba(52,211,153,0.25);
        }
        .cap-wrapper:hover .glow-bg { animation: pulseGlow 1.8s ease-in-out infinite; }
        .cap-wrapper:hover .platform-1 { animation: pulsePlatform 1.8s ease-in-out infinite; }
        .cap-wrapper:hover .platform-2 { animation: pulsePlatform 1.8s ease-in-out infinite 0.2s; }
        .cap-wrapper:hover .badge-icon { animation: badgeBob 2s ease-in-out infinite; }
        .cap-wrapper:hover .badge-icon:nth-child(2) { animation-delay: 0.2s; }
        .cap-wrapper:hover .badge-icon:nth-child(3) { animation-delay: 0.4s; }
        .cap-wrapper:hover .badge-icon:nth-child(4) { animation-delay: 0.6s; }
        .cap-wrapper:hover .badge-icon:nth-child(5) { animation-delay: 0.8s; }
        .cap-wrapper:hover .badge-icon:nth-child(6) { animation-delay: 1.0s; }
        .badge-icon { transition: border-color 0.3s, box-shadow 0.3s; }
        .cap-wrapper:hover .badge-icon {
          border-color: rgba(52,211,153,0.7);
          box-shadow: 0 0 12px rgba(52,211,153,0.25);
        }
        .cap-svg { transition: filter 0.4s ease; }
        .ring-outer, .ring-inner { transition: border-color 0.4s ease; }

        /* Faculty card */
        .faculty-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .faculty-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(52,211,153,0.12);
          border-color: rgba(52,211,153,0.25);
        }

        /* Modal */
        .modal-overlay { animation: overlayIn 0.2s ease forwards; }
        .modal-drawer { animation: drawerIn 0.3s cubic-bezier(0.34,1.4,0.64,1) forwards; }
        .modal-section { animation: fadeUp 0.4s ease forwards; }

        /* Expertise shimmer on hover */
        .expertise-tag { transition: all 0.3s ease; }
        .expertise-tag:hover {
          background: linear-gradient(90deg, #065f46, #059669, #065f46);
          background-size: 200% auto;
          animation: shimmer 1.5s linear infinite;
          border-color: rgba(52,211,153,0.5);
          color: #fff;
        }

        /* Custom scrollbar */
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: rgba(52,211,153,0.25); border-radius: 4px; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* ── Header Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold text-emerald-500 tracking-widest uppercase block">LEARN FROM THE BEST</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
              Faculty & <br /><span className="text-emerald-500">Mentorship</span>
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0 pt-2">
              Learn from experienced faculty and practitioners in Quantitative Research & Data Science. Engage with mentors who bring decades of field experience from academia, domestic, and international agencies.
            </p>
          </div>

          {/* Cap Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[320px]">
            <div className="glow-bg absolute w-64 h-64 rounded-full bg-emerald-500/15 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="cap-wrapper relative w-80 h-80 flex items-center justify-center cursor-pointer">
              <div className="ring-outer absolute inset-0 rounded-full border border-dashed border-emerald-500/30"></div>
              <div className="ring-inner absolute w-56 h-56 rounded-full border border-emerald-500/10"></div>
              <div className="relative z-10 flex flex-col items-center">
                <svg className="cap-svg w-28 h-28 text-emerald-400 drop-shadow-[0_0_24px_rgba(52,211,153,0.65)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  <path d="M19 13.19v4.31c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-4.31l7 3.82 7-3.82z" />
                </svg>
                <div className="platform-1 w-44 h-4 bg-emerald-500/35 rounded-full blur-sm -mt-1"></div>
                <div className="platform-2 w-32 h-3 bg-emerald-500/55 rounded-full -mt-1.5"></div>
                <div className="w-24 h-1.5 bg-emerald-400/30 rounded-full mt-0.5"></div>
              </div>
              <div className="badge-icon absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><Users size={16} className="text-emerald-400" /></div>
              <div className="badge-icon absolute top-10 left-4 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><BarChart2 size={16} className="text-emerald-400" /></div>
              <div className="badge-icon absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><Globe size={16} className="text-emerald-400" /></div>
              <div className="badge-icon absolute top-10 right-4 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><BookOpen size={16} className="text-emerald-400" /></div>
              <div className="badge-icon absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><Compass size={16} className="text-emerald-400" /></div>
              <div className="badge-icon absolute bottom-8 right-10 w-10 h-10 rounded-full bg-[#0b1221] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10"><ShieldCheck size={16} className="text-emerald-400" /></div>
            </div>
          </div>
        </div>

        {/* ── Faculty Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              onClick={() => setSelected(faculty)}
              className="faculty-card bg-[#0b1221]/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg relative cursor-pointer group"
            >
              {/* Top shimmer line on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>

              {/* Photo */}
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-emerald-500/60 to-emerald-900/20">
                  <img
                    src={faculty.pic}
                    alt={faculty.name}
                    className="w-full h-full object-cover rounded-full bg-[#020710]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80";
                    }}
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0b1221]"></div>
              </div>

              {/* Info */}
              <div className="space-y-1 flex-grow w-full">
                <h3 className="text-sm font-black text-white tracking-tight leading-tight">{faculty.name}</h3>
                <p className="text-[9px] font-extrabold text-emerald-500 tracking-widest uppercase pt-1">{faculty.title}</p>
                <p className="text-[11px] text-gray-400 font-light max-w-[200px] mx-auto pt-1.5 leading-snug">{faculty.institution}</p>
              </div>

              {/* Expertise preview pills */}
              {faculty.expertise && (
                <div className="flex flex-wrap gap-1 justify-center mt-4 max-w-[220px]">
                  {faculty.expertise.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 tracking-wide">
                      {tag}
                    </span>
                  ))}
                  {faculty.expertise.length > 2 && (
                    <span className="text-[9px] font-semibold text-gray-500 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                      +{faculty.expertise.length - 2} more
                    </span>
                  )}
                </div>
              )}

              {/* Bottom row */}
              <div className="pt-5 w-full flex items-center justify-center">
                <span className="text-[9px] text-emerald-500/70 font-semibold tracking-wide uppercase group-hover:text-emerald-400 transition-colors">
                  View Profile →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Pillars ── */}
        <div className="bg-[#0b1221]/30 border border-white/5 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-5xl mx-auto">
          {corePillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center space-y-3 px-4 py-5 rounded-2xl border border-transparent cursor-default
                         transition-all duration-300
                         hover:border-emerald-500/25 hover:bg-emerald-500/5"
            >
              {/* Top glow line on hover */}
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon circle */}
              <div className="relative p-3 rounded-full border border-emerald-500/15 bg-emerald-500/5 text-emerald-400
                              transition-all duration-300
                              group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20
                              group-hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]
                              group-hover:scale-110">
                {pillar.icon}
              </div>

              {/* Title */}
              <h4 className="text-xs font-black text-white tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                {pillar.title}
              </h4>

              {/* Desc */}
              <p className="text-[10px] text-gray-500 font-light leading-tight max-w-[140px] transition-colors duration-300 group-hover:text-gray-300">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="bg-[#0b1221]/60 border border-white/5 rounded-3xl p-10 text-center space-y-4 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Learn. Collaborate. <span className="text-emerald-400">Create Impact.</span>
          </h3>
          <p className="text-sm text-gray-400 font-light">Be guided by experts who care about your growth and research success.</p>
          <a
            href="https://iisppracademy.com/course"
            className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all mt-2"
          >
            Join the Fellowship &rarr;
          </a>
        </div>

      </div>
      <div className="pb-16"></div>

      {/* ════════════════════════════════════════
          FACULTY DETAIL MODAL
      ════════════════════════════════════════ */}
      {selected && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(2,7,16,0.88)", backdropFilter: "blur(10px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-drawer modal-scroll relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/8"
            style={{ background: "linear-gradient(145deg, #0c1425 0%, #070d1a 100%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>

            {/* ── Modal Header ── */}
            <div className="relative p-8 pb-7 border-b border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute -bottom-8 left-0 w-60 h-60 bg-emerald-900/15 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 rounded-2xl p-[2px] bg-gradient-to-br from-emerald-400/70 to-emerald-900/30">
                    <img
                      src={selected.pic}
                      alt={selected.name}
                      className="w-full h-full object-cover rounded-2xl bg-[#020710]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0c1425]"></div>
                </div>

                {/* Name block */}
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase mb-1">{selected.title}</p>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">{selected.name}</h2>
                  <p className="text-sm text-gray-400 mt-1.5 font-light">{selected.institution}</p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    {selected.qualifications && (
                      <span className="text-[11px] text-gray-500 font-light">
                        {selected.qualifications.length} academic qualifications
                      </span>
                    )}
                    {selected.expertise && (
                      <span className="text-[11px] text-emerald-600 font-light">
                        {selected.expertise.length} areas of expertise
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Modal Body ── */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">

              {/* LEFT — Bio + Courses + Publications */}
              <div className="lg:col-span-3 space-y-8">

                {/* Biography */}
                <div className="modal-section" style={{ animationDelay: "0.05s" }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-xs font-black text-white tracking-[0.15em] uppercase">Biography</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-7 text-justify">
                    {selected.biography}
                  </p>
                </div>

                {/* Courses Taught */}
                {selected.courses && selected.courses.length > 0 && (
                  <div className="modal-section" style={{ animationDelay: "0.1s" }}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                      <h3 className="text-xs font-black text-white tracking-[0.15em] uppercase">Courses Taught</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selected.courses.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-300 bg-white/4 border border-white/8 rounded-xl px-3.5 py-2 font-light hover:border-emerald-500/30 hover:text-white transition-all cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Publications */}
                {selected.publications && selected.publications.length > 0 && (
                  <div className="modal-section" style={{ animationDelay: "0.15s" }}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                      <h3 className="text-xs font-black text-white tracking-[0.15em] uppercase">Publications</h3>
                    </div>
                    <div className="space-y-3">
                      {selected.publications.map((pub, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-white/3 border border-white/5 rounded-2xl hover:border-emerald-500/20 transition-all group/pub">
                          <BookMarked size={14} className="text-emerald-500 flex-shrink-0 mt-0.5 group-hover/pub:text-emerald-400 transition-colors" />
                          <p className="text-xs text-gray-400 font-light leading-relaxed">{pub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT — Qualifications + Expertise */}
              <div className="lg:col-span-2 space-y-8">

                {/* Academic Qualifications */}
                {selected.qualifications && selected.qualifications.length > 0 && (
                  <div className="modal-section" style={{ animationDelay: "0.08s" }}>
                    <div className="bg-white/3 border border-white/6 rounded-2xl p-5">
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                        <h3 className="text-xs font-black text-white tracking-[0.15em] uppercase">Academic Qualifications</h3>
                      </div>
                      <div className="space-y-4">
                        {selected.qualifications.map((q, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <GraduationCap size={12} className="text-emerald-400" />
                            </div>
                            <p className="text-xs text-gray-400 font-light leading-relaxed pt-1">{q}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Expertise */}
                {selected.expertise && selected.expertise.length > 0 && (
                  <div className="modal-section" style={{ animationDelay: "0.13s" }}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                      <h3 className="text-xs font-black text-white tracking-[0.15em] uppercase">Key Expertise</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {selected.expertise.map((tag, i) => (
                        <span
                          key={i}
                          className="expertise-tag text-[10px] font-black tracking-[0.15em] uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-2.5 text-center cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;
