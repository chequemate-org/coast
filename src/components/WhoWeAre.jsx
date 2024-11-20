import { Link } from "react-router-dom";
import { whoWeAre } from "../assets";
import SectionHeader from "./reusables/SectionHeader";

const WhoWeAre = () => {
  return (
    <section className="bg-primary3 flex flex-col mx py-16">
      <SectionHeader className={"border-b-primary4 "} title="Who we are" />
      <div className="md:mx-[5%] mx-5 flex flex-col lg:flex-row items-center lg:justify-between gap-12 mt-10">
        <div className="w-full lg:w-[48%] flex flex-col justify-center">
          <p className=" text-lg mb-8">
            Coast Group of Technology Holding Companies is a parent company of
            tech brands revolutionizing utility payments, savings, investments,
            and workforce solutions. With a focus on fintech and e-commerce, we
            aim to become a leading technology-driven financial services and
            talent marketplace company.
          </p>
          <Link to={"/about-us"}>
            <button className="bg-primary1 text-primary  font-bold px-6 py-3 rounded-full uppercase w-full lg:w-[240px] hover:bg-primary4 transition">
              See More
            </button>
          </Link>
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
