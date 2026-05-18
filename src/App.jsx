import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutCourse from "./components/AboutCourse"; 
import Different from "./components/Different";
import Faculty from "./components/Faculty";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          
          {/* Main Home Stream */}
          <Route 
            index 
            element={
              <>
                <section className="pt-32 pb-40 bg-gradient-to-b from-[#020710] via-[#03161c] to-[#020710] w-full relative">
                  <div className="w-full px-4 md:px-16 max-w-7xl mx-auto">
                    <Hero />
                  </div>
                </section>
                
                <section className="w-full bg-white relative z-10">
                  <AboutCourse />
                </section>
              </>
            } 
          />
          
          {/* Why Us View Route */}
          <Route 
            path="why-us" 
            element={
              <section className="pt-32 pb-24 flex items-center justify-center w-full bg-[#fdfbf7] text-gray-900">
                <div className="w-full px-4 md:px-16 max-w-7xl mx-auto">
                  <Different />
                </div>
              </section>
            } 
          />
          
          {/* Faculty View Route */}
          <Route 
            path="faculty" 
            element={<Faculty />} 
          />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;