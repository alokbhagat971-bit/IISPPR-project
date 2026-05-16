import { GraduationCap, BadgeCheck, Briefcase, Globe } from "lucide-react";
import faculty1 from "../images/Faculty1.png";
import faculty2 from "../images/Faculty2.png";
import faculty3 from "../images/Faculty3.png";
import faculty4 from "../images/Faculty4.png";
import "../styles/Faculty.css";

function Faculty() {
  const facultyData = [
    {
      icon: <GraduationCap size={24} className="faculty-icon" />,
      title: "Academic Experts",
    },
    {
      icon: <BadgeCheck size={24} className="faculty-icon" />,
      title: "Mentorship",
    },
    {
      icon: <Briefcase size={24} className="faculty-icon" />,
      title: "Real World Experience",
    },
    {
      icon: <Globe size={24} className="faculty-icon" />,
      title: "Global Perspectives",
    }
  ];
  
  const facultyData2 = [
    {
      pic: faculty1,
      name:"Dr. Arvind Subramanian",
      title:"Public Policy Expert",
      description:"20+ years in governance and policy advisory for national & global agencies."
    },
    {
      pic: faculty2,
      name:"Dr. Meera Nair",
      title:"Data Science Lead",
      description:"18+ years of experience in applying data science to policy challenges."
    },
    {
      pic: faculty3,
      name:"Dr. Rohan Desai",
      title:"Research Director",
      description:"15+ years leading field research and policy analysis in South Asia."
    },
    {
      pic: faculty4,
      name:"Dr. Anjali Rao",
      title:"Global Policy Specialist",
      description:"20+ years working on international development and global governance."
    }
  ];
  return (
    <>
      <div className="faculty-container">
        <div className="faculty-content-left">
          <h1 className="faculty-title">Faculty & Mentorship</h1>
          <h3 className="faculty-subtitle">Learn from experienced faculty and practitioners in public policy, data science, and governance innovation. You’ll engage with mentors who bring decades of field experience from academia, government, and international development agencies.</h3>
          <div className="faculty-features">
            {facultyData.map((item, index) => (
              <div className="faculty-feature" key={index}>
                {item.icon}
                <h3 className="faculty-feature-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="faculty-content-right">
          {facultyData2.map((item, index) => (
            <div className="faculty-member" key={index}>
              <img src={item.pic} alt={item.name} className="faculty-pic" />
              <h3 className="faculty-name">{item.name}</h3>
              <p className="faculty-title">{item.title}</p>
              <p className="faculty-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faculty;