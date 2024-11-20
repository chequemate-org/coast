import { useState, useEffect, useRef } from "react";
import { heroImg, heroStar } from "../assets";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 lg:h-[75vh] pt-16 lg:mt-[5%] pb-10 mt-[10%] px-7 lg:px-[8%] overflow-hidden"
    >
      {/* Text Content */}
      <div
        className={`lg:w-1/2 flex flex-col lg:gap-6 gap-3 mt-4 lg:mt-0 lg:items-start items-center text-left transition-opacity duration-1000 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="lg:text-7xl text-4xl font-medium transition-transform duration-1000 hover:scale-105">
          Empowering your digital journey with
          <span className="text-primary">innovation</span> and{" "}
          <span className="text-primary">excellence</span>
          <img
            src={heroStar}
            alt="star"
            className="inline ml-3 bg-primary1 md:p-2 p-1 rounded-full"
          />
        </h1>
        <p className="text-primary max-w-md md:text-xl text-lg font-normal">
          Explore Coast&apos;s suite of solutions that bridges ambition and
          achievement.
        </p>
      </div>

      {/* Image Content */}
      <div className="lg:w-[40%] w-full h-auto relative flex justify-center items-center mt-5 lg:mt-0">
        <div className="rounded-lg w-full h-auto max-h-[75vh] transition-transform duration-1000 transform hover:scale-105">
          <img
            src={heroImg}
            alt="hero"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
