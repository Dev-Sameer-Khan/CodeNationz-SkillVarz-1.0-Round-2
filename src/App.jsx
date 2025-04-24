import React from "react";
import Hero from "./landingPage/Hero"
import About from "./landingPage/About"
import About2 from "./landingPage/About2"
import Work from "./landingPage/Work"
import Footer from "./landingPage/Footer"
import Navbar from "./components/Navbar"
import Loader from "./components/Loader"

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
