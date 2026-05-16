import Hero from "./components/Hero";
import Different from "./components/Different";
import Faculty from "./components/Faculty";
import "./App.css";

function App(){
  return(
    <>
      <nav className="navbar">
        <div className="logo">IISPPR CERTIFICATION PROGRAM</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#different">Why Us</a></li>
          <li><a href="#faculty">Faculty</a></li>
        </ul>
      </nav>
      <section id="hero" className="section">
        <Hero />
      </section>
      <section id="different" className="section">
        <Different />
      </section>
      <section id="faculty" className="section">
        <Faculty />
      </section>
    </>
  )
}

export default App;