import React from "react";
import Hero from "./woodenWork/Hero";
import About from "./woodenWork/About";
import About2 from "./woodenWork/About2";
import WorkHere from "./woodenWork/WorkHere";
import ShowCase from "./woodenWork/ShowCase";
import Contact from "./woodenWork/Contact";
import NextProject from "./woodenWork/NextProject";
import Navbar from "./components/Navbar";
import Footer from "./woodenWork/Footer";

const Wooden = () => {
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

export default Wooden;
