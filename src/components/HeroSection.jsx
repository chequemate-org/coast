import { useState, useEffect, useRef } from "react";
import { heroImg, heroStar } from "../assets";

const HeroSection = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

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
      className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 lg:h-[75vh] lg:py-10 lg:mt-16 my-5 px-5 lg:px-[8%] overflow-hidden"
    >
      <div
        className={`lg:w-1/2 flex flex-col lg:gap-6 gap-3 mt-4 lg:mt-0 lg:items-start items-center text-left transition-opacity duration-1000 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="lg:text-7xl text-4xl font-medium font-georgia transition-transform duration-1000 hover:scale-105">
          Empowering your digital journey with{" "}
          <span className="text-primary">innovation</span> and{" "}
          <span className="text-primary">excellence</span>
          <img
            src={heroStar}
            alt="star"
            className="inline ml-3 bg-primary1 md:p-2 p-1 rounded-full"
          />
        </h1>
        <p className="text-primary max-w-md font-lato md:text-xl text-lg font-normal">
          Explore Coast&apos;s suite of solutions that bridges ambition and
          achievement.
        </p>
      </div>
      <div className="lg:w-[40%] lg:mt-0 mt-[15%] w-full lg:h-full h-[60vh] relative flex justify-center items-center">
        <div
          className={`absolute rounded-lg w-full h-full transition-transform duration-1000 transform hover:scale-105`}
        >
          <img
            src={heroImg}
            alt="hero"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
