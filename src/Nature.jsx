import React from "react";
import Hero from "./nature/Hero";
import About from "./nature/About";
import About2 from "./nature/About2";
import WorkHere from "./nature/WorkHere";
import ShowCase from "./nature/ShowCase";
import Contact from "./nature/Contact";
import NextProject from "./nature/NextProject";
import Navbar from "./components/Navbar";
import Footer from "./nature/Footer";

const Nature = () => {
  return (
    <main className="w-full overflow-hidden relative">
      <Hero />
      <Navbar />
      <About />
      <About2 />
      <WorkHere />
      <ShowCase />
      <Contact />
      <NextProject />
      <Footer />
    </main>
  );
};

export default Nature;
