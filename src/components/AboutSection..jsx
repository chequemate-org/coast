import { aboutsection } from "../assets";
import Badge from "./reusables/Badge";

const AboutSection = () => {
  return (
    <section className="w-full px-[10%] py-16">
      <div className="flex flex-col gap-12 items-center justify-between w-full">
        <div className="w-full flex flex-col md:flow-row justify-between items-">
          <div className="inline-block px-4 py-2 w-fit rounded-full">
            <Badge text="ABOUT COAST" className="text-primary" />
          </div>

          {/* <div className="flex gap-16">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-teal-800 text-4xl">
                *
              </span>
            ))}
          </div> */}
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:w-1/2">
            Welcome to <span className="text-teal-800">COAST</span>, where
            innovation meets impact in the digital realm!
          </h1>
          <p className="text-[#949494] text-justify lg:w-1/2 leading-relaxed text-xl">
            We are more than just a company - we are your partner in digital
            growth and transformation. With a foundation built on innovation and
            excellence, we pioneer solutions that meet the diverse needs of
            today&apos;s digital landscape.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12">
          <div className="space-y-8 text-xl lg:w-1/2">
            <p className="text-gray-600 leading-10">
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

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="bg-teal-50 rounded-3xl p-8 relative max-w-[600px]">
              <img
                src={aboutsection}
                alt="Excited person with innovation and excellence labels"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute top-4 left-4 bg-pink-200 px-4 py-1 rounded-full">
                <span className="text-pink-800 text-sm">INNOCATION</span>
              </div>
              <div className="absolute top-4 right-4 bg-pink-200 px-4 py-1 rounded-full">
                <span className="text-pink-800 text-sm">EXCELLENCE</span>
              </div>
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
