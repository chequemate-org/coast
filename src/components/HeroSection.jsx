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
        threshold: 0.1,
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
      className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 lg:h-[90vh] pt-16 mt-[10%] my-[5%] lg:px-[8%] overflow-hidden"
    >
      <div className="max-w-[1440px] flex md:flex-row flex-col justify-between items-center">
        <div
          className={`lg:w-1/2 flex flex-col gap-6 mt-4 lg:mt-14 items-start text-left px-5 md:px-0 transition-opacity duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="lg:text-6xl text-3xl pt-3 font-medium transition-transform duration-1000 hover:scale-105">
            Empowering your digital journey with
            <span className="text-primary"> innovation</span> and
            <span className="text-primary"> excellence</span>
            <img
              src={heroStar}
              alt="star"
              className="inline ml-3 bg-primary1 md:p-[6px] p-1 rounded-full"
            />
          </h1>
          <p className="text-primary md:text-lg text-sm font-normal">
            Explore Coast&apos;s suite of solutions that bridges ambition and
            achievement.
          </p>
        </div>

        <div className="lg:w-[40%] w-full h-auto relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="rounded-lg w-full h-auto max-h-[85vh] transition-transform duration-1000 transform hover:scale-95">
            <img
              src={heroImg}
              alt="hero"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
