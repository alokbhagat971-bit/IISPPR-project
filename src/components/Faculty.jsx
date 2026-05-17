import { GraduationCap, BadgeCheck, Briefcase, Globe } from "lucide-react";
import faculty1 from "../images/Faculty1.png";
import faculty2 from "../images/Faculty2.png";
import faculty3 from "../images/Faculty3.png";
import faculty4 from "../images/Faculty4.png";

function Faculty() {
  const facultyData = [
    { icon: <GraduationCap size={20} className="text-amber-600" />, title: "Academic Experts" },
    { icon: <BadgeCheck size={20} className="text-amber-600" />, title: "Mentorship" },
    { icon: <Briefcase size={20} className="text-amber-600" />, title: "Real World Experience" },
    { icon: <Globe size={20} className="text-amber-600" />, title: "Global Perspectives" }
  ];
  
  const facultyData2 = [
    {
      pic: faculty1,
      name: "Dr. Arvind Subramanian",
      title: "Public Policy Expert",
      description: "20+ years in governance and policy advisory for national & global agencies."
    },
    {
      pic: faculty2,
      name: "Dr. Meera Nair",
      title: "Data Science Lead",
      description: "18+ years of experience in applying data science to policy challenges."
    },
    {
      pic: faculty3,
      name: "Dr. Rohan Desai",
      title: "Research Director",
      description: "15+ years leading field research and policy analysis in South Asia."
    },
    {
      pic: faculty4,
      name: "Dr. Anjali Rao",
      title: "Global Policy Specialist",
      description: "20+ years working on international development and global governance."
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">
      
      {/* Left Columns Sticky Headers Block */}
      <div className="w-full lg:w-[40%] space-y-6 lg:sticky lg:top-36">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#030a16] tracking-tight">
          Faculty & Mentorship
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          Learn from experienced faculty and practitioners in public policy, data science, and governance innovation. You’ll engage with mentors who bring decades of field experience from academia, government, and international development agencies.
        </p>
        
        {/* Mini Pill Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {facultyData.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-xs">
              <div className="p-1.5 bg-amber-50 rounded-lg shrink-0">{item.icon}</div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column Grid Layout Profile Blocks */}
      <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
        {facultyData2.map((item, index) => (
          <div key={index} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 text-left">
            <img 
              src={item.pic} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-50" 
            />
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {item.name}
            </h3>
            <p className="text-xs font-semibold text-amber-600 mt-0.5 mb-3">
              {item.title}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Faculty;