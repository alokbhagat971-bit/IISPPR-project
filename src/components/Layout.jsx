import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper utility to style links based on active subpages
  const linkStyle = (path) => 
    location.pathname === path 
      ? "text-white border-b-2 border-emerald-500 pb-1 font-semibold" 
      : "hover:text-emerald-500 text-gray-300 transition-colors duration-200";

  return (
    <div className="min-h-screen bg-[#020710] text-white w-full overflow-x-hidden flex flex-col antialiased">
      
      {/* 1. PERSISTENT GLOBAL NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020710]/90 backdrop-blur-md border-b border-white/5 w-full">
        <div className="flex items-center justify-between px-6 py-4 md:px-16 max-w-7xl mx-auto w-full">
          
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img 
              src="https://iisppr.org.in/wp-content/uploads/2024/09/logo-removebg-preview_06272023080455.png" 
              alt="IISPP Logo" 
              className="h-9 w-auto object-contain" 
            />
            <div className="text-left leading-none">
              <span className="text-white font-black text-sm tracking-widest block">IISPPR</span>
              <span className="text-[8px] text-gray-400 font-bold tracking-wider mt-0.5 block">ACADEMIC EXCELLENCE</span>
            </div>
          </Link>

          {/* Desktop Routing Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li><Link to="/" className={linkStyle("/")}>Home</Link></li>
            <li><Link to="/why-us" className={linkStyle("/why-us")}>Why Us</Link></li>
            <li><Link to="/faculty" className={linkStyle("/faculty")}>Faculty</Link></li>
          </ul>

          <div className="hidden md:block">
            <a href="https://iisppracademy.com/course" className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-all">
              Get Course Now
            </a>
          </div>

          {/* Hamburger Mobile Menu Trigger */}
          <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-gray-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Canvas */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[#020710]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <ul className="flex flex-col items-center gap-6 py-8 px-6 font-medium text-base text-gray-300">
            <li className="w-full text-center"><Link onClick={() => setIsOpen(false)} to="/" className="block py-2 w-full text-white border-b border-white/5">Home</Link></li>
            <li className="w-full text-center"><Link onClick={() => setIsOpen(false)} to="/why-us" className="block py-2 w-full border-b border-white/5">Why Us</Link></li>
            <li className="w-full text-center"><Link onClick={() => setIsOpen(false)} to="/faculty" className="block py-2 w-full border-b border-white/5">Faculty</Link></li>
            <li className="w-full pt-2">
              <a href="https://iisppracademy.com/course" className="block text-center py-3 w-full bg-emerald-600 text-white rounded-xl text-sm font-semibold">Get Course Now</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 2. DYNAMIC PAGE INJECTION MATRIX */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* 3. PERSISTENT GLOBAL FOOTER GRID */}
      <footer className="bg-[#01040a] text-gray-400 text-xs py-12 border-t border-white/5 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="https://iisppr.org.in/wp-content/uploads/2024/09/logo-removebg-preview_06272023080455.png" alt="Logo" className="h-6 w-auto" />
              <span className="text-white font-bold text-sm tracking-widest">IISPPR</span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed">Empowering minds through research, data, and comprehensive context-driven analytical knowledge matrix models.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-[11px]">
              <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
              <li><Link to="/why-us" className="hover:text-emerald-400">Why Us</Link></li>
              <li><Link to="/faculty" className="hover:text-emerald-400">Faculty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#" className="hover:text-emerald-400">Research Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400">FAQs</a></li>
              <li><a href="#" className="hover:text-emerald-400">Contact Track</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
            <p className="text-gray-500 text-[11px]">Stay updated on systemic policy tracks and data advancements.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center border-t border-white/5 pt-6 mt-8 text-gray-600 text-[10px]">
          &copy; 2026 IISPPR Academic Track. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Layout;