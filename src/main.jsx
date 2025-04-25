import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
