import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <h1
        ref={headingRef}
        className="text-7xl md:text-9xl font-bold tracking-tight"
      >
        404
      </h1>
      <p
        ref={textRef}
        className="text-lg md:text-2xl text-center max-w-xl mt-4 text-gray-400"
      >
        Oops. This page got lost in space.
      </p>
      <div ref={btnRef} className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>

      <span className="absolute bottom-8 text-xs text-gray-600 tracking-wide opacity-40">
        Copyright &copy; 2025 VisuaLab Studios. All rights reserved.
      </span>
    </div>
  );
};

export default ErrorPage;
