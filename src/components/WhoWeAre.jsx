import { whoWeAre } from "../assets";

const WhoWeAre = () => {
  return (
    <section className="bg-primary3 flex flex-col mx py-16">
      <div className="border-b-primary4 px-[5%] pb-6 border-b-[1px] w-full h-fit">
        <h2 className="text-5xl md:text-7xl font-rubik text-primary mb-6">
          Who we are
        </h2>
      </div>
      <div className="md:mx-[5%] mx-5 flex flex-col lg:flex-row items-center lg:justify-between gap-12 mt-10">
        <div className="w-full lg:w-[48%] flex flex-col justify-center">
          <p className="font-lato text-lg mb-8">
            Coast Group of Technology Holding Companies is a parent company of
            tech brands revolutionizing utility payments, savings, investments,
            and workforce solutions. With a focus on fintech and e-commerce, we
            aim to become a leading technology-driven financial services and
            talent marketplace company.
          </p>
          <button className="bg-primary1 text-primary font-lato font-bold px-6 py-3 rounded-full uppercase w-full lg:w-[240px] hover:bg-primary4 transition">
            See More
          </button>
        </div>

        <div className="w-full lg:w-[48%] flex justify-center lg:justify-end items-center">
          <img
            src={whoWeAre}
            alt="Person working on a laptop"
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
