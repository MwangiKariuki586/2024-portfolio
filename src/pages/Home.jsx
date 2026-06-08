import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const section = document.getElementById(location.hash.slice(1));
    if (section) {
      window.requestAnimationFrame(() => {
        const header = document.querySelector(".site-header");
        const headerOffset = header ? header.getBoundingClientRect().height + 18 : 0;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: Math.max(sectionTop - headerOffset, 0),
          behavior: "smooth",
        });
      });
    }
  }, [location.hash]);

  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
