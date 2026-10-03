import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Suspense
          fallback={
            <div className="loading-screen">
              <div className="loader"></div>
              <p>Loading portfolio...</p>
            </div>
          }
        >
          <Home />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;