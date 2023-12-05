import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import  Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-black">
          <Navbar />
          <Suspense
            fallback={
              <div className="w-screen h-screen flex justify-center items-center">
                Loading...
              </div>
            }
          >
            <div className="overflow-hidden">
              <Hero />
            </div>
            <div className="bg-white overflow-hidden">
              <About />
            </div>
            <Experience />
            <div className="w-full bg-white">
              <Tech />
            </div>
            <div className="overflow-hidden">
              <Works />
            </div>
            <div className="w-full bg-white">
              <Feedbacks />
            </div>
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
