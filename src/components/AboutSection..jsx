import { aboutsection } from "../assets";
import Badge from "./reusables/Badge";

const AboutSection = () => {
  return (
    <section className="w-full px-[10%] py-16">
      <div className="flex flex-col gap-12 items-center justify-between w-full">
        <div className="w-full flex flex-col md:flow-row items-center lg:items-start">
          <div className="inline-block px-4 w-fit rounded-full">
            <Badge text="ABOUT COAST" className="text-primary" />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 lg:pr-[5%] pr-0">
          <h1 className="text-[21px] leading-8 md:leading-0 lg:text-4xl xl:text-5xl font-bold lg:w-1/2">
            Welcome to <span className="text-teal-800">COAST</span>, where
            innovation meets impact in the digital realm!
          </h1>
          <p className="text-[#949494] md:text-justify text-left lg:w-[40%] leading-6 md:leading-relaxed text-[15px] md:text-xl">
            We are more than just a company - we are your partner in digital
            growth and transformation. With a foundation built on innovation and
            excellence, we pioneer solutions that meet the diverse needs of
            today&apos;s digital landscape.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="space-y-8 text-base md:text-xl lg:w-1/2">
            <p className="text-gray-600 leading-8 md:leading-10">
              As trailblazers in the industry, we specialize in excellence
              through our cutting-edge Coast platform. Immerse yourself in the
              world of versatile and enjoy seamless transactions with our
              versatile payment solution, Comfort. Discover a wealth of skills
              on our thriving marketplace, Puffer, and witness financial dreams
              come to life with ChequeMate.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Coast, our mission is to empower individuals and businesses,
              acting as the catalyst that bridges the gap between ambition and
              achievement with solutions and products tailored to make things
              run smoothly.
            </p>
          </div>

          <div className="lg:w-1/2 flex md:justify-center justify-between items-center">
            <div className="lg:w-[500px]">
              <img
                src={aboutsection}
                alt="Excited person with innovation and excellence labels"
                className="w-full h-auto lg:w-[100%]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 w-full">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-teal-800 text-2xl">
              *
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
