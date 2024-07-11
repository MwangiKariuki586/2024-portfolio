import React from "react";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
