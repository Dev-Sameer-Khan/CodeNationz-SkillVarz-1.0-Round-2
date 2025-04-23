import React from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import About2 from "./sections/About2";
import Work from "./sections/Work";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="w-full overflow-hidden relative">
      <Loader />
      <Hero />
      <Navbar />
      <About />
      <About2 />
      <Work/>
      <Footer/>
    </main>
  );
};

export default App;
