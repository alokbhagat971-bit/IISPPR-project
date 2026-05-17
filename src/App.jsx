import Hero from "./components/Hero";
import Different from "./components/Different";
import Faculty from "./components/Faculty";

function App() {
  return (
    <div className="min-h-screen bg-[#020710] text-white w-full overflow-x-hidden antialiased">
      {/* Fixed Header Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 bg-[#020710]/90 backdrop-blur-md border-b border-white/5 w-full">
        {/* Logo and Brand Group */}
        <div className="flex items-center gap-3">
          <img 
            src="https://iisppr.org.in/wp-content/uploads/2024/09/logo-removebg-preview_06272023080455.png" 
            alt="IISPP Logo" 
            className="h-9 w-auto object-contain" 
          />
          <div className="text-left leading-none">
            <span className="text-white font-black text-sm tracking-widest block">IISPPR</span>
            <span className="text-[8px] text-gray-400 font-bold tracking-wider mt-0.5 block">ACADEMIC EXCELLENCE</span>
          </div>
        </div>

        {/* Links matching your exact routes */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li><a href="#hero" className="text-white border-b-2 border-emerald-500 pb-1">Home</a></li>
          <li><a href="#different" className="hover:text-emerald-500 transition-colors duration-200">Why Us</a></li>
          <li><a href="#faculty" className="hover:text-emerald-500 transition-colors duration-200">Faculty</a></li>
        </ul>

        {/* Action Button */}
        <a href="https://iisppracademy.com/course" className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-all">
          Get Course Now
        </a>
      </nav>

      {/* Hero Section Container */}
      <section id="hero" className="pt-32 pb-40 bg-gradient-to-b from-[#020710] via-[#03161c] to-[#020710] relative w-full px-4 md:px-16 max-w-7xl mx-auto">
        <Hero />
      </section>

      {/* Spacing bridge for overlapping cards */}
      <div className="h-24 bg-white w-full"></div>

      {/* Why Us Section */}
      <section id="different" className="py-20 flex items-center justify-center w-full bg-[#fdfbf7] text-gray-900">
        <div className="w-full px-4 md:px-16 max-w-7xl mx-auto">
          <Different />
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 flex items-center justify-center w-full bg-[#fdfbf7] text-gray-900">
        <div className="w-full px-4 md:px-16 max-w-7xl mx-auto">
          <Faculty />
        </div>
      </section>
    </div>
  );
}

export default App;