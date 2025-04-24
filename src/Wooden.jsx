import React from "react";
import Hero from "./woodenWork/Hero";
import About from "./woodenWork/About";
import About2 from "./woodenWork/About2";
import WorkHere from "./woodenWork/WorkHere";
import ShowCase from "./woodenWork/ShowCase";
import Contact from "./woodenWork/Contact";
import NextProject from "./woodenWork/NextProject";
import Loader from "./components/Loader";

const Wooden = () => {
  return (
    <main className="w-full overflow-hidden relative">
      <Loader />
      <Hero />
      <About />
      <About2 />
      <WorkHere />
      <ShowCase />
      <Contact />
      <NextProject />
    </main>
  );
};

export default Wooden;
