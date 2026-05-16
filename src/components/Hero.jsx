import { Users, BadgeCheck, FlaskConical } from "lucide-react";
import lady from "../images/Lady.png";
import "../styles/Hero.css";

function Hero() {
  
  return (
    <>
      <div className="hero-container">
        <div className="left-content">
          <h1>
  <span className="line-one">Quantitative Research &</span> <span className="accent-gold">Data Science</span> Program
</h1>
          <h3>Master data driven decision making, public policy analysis and real-world research through expert mentorship, fieldwork and hands-on projects.</h3>
          <div className="button-group">
            <a href="https://iisppracademy.com/payment-page/" className="enroll-button">Get Course Now &rarr;</a>
            <button className="curriculum-button">Explore Curriculum &#9654;</button>
          </div>
          {/* --- Move your feature items inside this row wrapper --- */}
<div className="features-row">
  <div className="features">
    <div className="feature-item-right">
      <Users size={24} className="feature-icon" />
    </div>
    <div className="feature-item-left">
      <h3>5,000+</h3>
      <h4>Learners</h4>
    </div>
  </div>

  <div className="features">
    <div className="feature-item-right">
      <BadgeCheck size={24} className="feature-icon" />
    </div>
    <div className="feature-item-left">
      <h3>50+</h3>
      <h4>Expert Mentors</h4>
    </div>
  </div>

  <div className="features">
    <div className="feature-item-right">
      <FlaskConical size={24} className="feature-icon" />
    </div>
    <div className="feature-item-left">
      <h3>100+</h3>
      <h4>Research Projects</h4>
    </div>
  </div>
</div>
        </div>

        <div className="right-content">
          <div className="hero-glow-backlight"></div>
          
          <img src={lady} alt="Lady with laptop" className="hero-image" />
          <div className="image-comments fieldwork">
            <img src="https://iisppracademy.com/wp-content/uploads/2025/07/10.png" alt="Comment 1" className="comment-image" />
            <div>
              <h2 className="comment-text">Fieldwork</h2>
              <h3>Real world impact</h3>
            </div>
          </div>
          
          <div className="image-comments publication">
            <img src="https://iisppracademy.com/wp-content/uploads/2025/07/8.png" alt="Comment 2" className="comment-image" />
            <div>
              <h2 className="comment-text">Publication</h2>
              <h3>Opportunities</h3>
            </div>
          </div>
          
          <div className="image-comments gold-medal">
            <img src="https://iisppracademy.com/wp-content/uploads/2025/07/9.png" alt="Comment 3" className="comment-image" />
            <div>
              <h2 className="comment-text">Gold Medal</h2>
              <h3>Recognition</h3>
            </div>
          </div>
          
          <div className="image-comments policy-impact">
            <img src="https://iisppracademy.com/wp-content/uploads/2025/07/6.png" alt="Comment 4" className="comment-image" />
            <div>
              <h2 className="comment-text">Policy Impact</h2>
              <h3>Drive meaningful change</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;