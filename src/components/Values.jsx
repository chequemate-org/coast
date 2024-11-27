import { flash, handshake, users } from "../assets";
import Badge from "./reusables/Badge";

const Features = () => {
  const features = [
    {
      id: 1,
      image: users,
      heading: "Meticulous Client Focus",
      text: "We prioritize our clients' needs by paying meticulous attention to detail, ensuring tailored and effective solutions.",
    },
    {
      id: 2,
      image: flash,
      heading: "Sense of Urgency",
      text: "Operating with a keen sense of urgency, we deliver swift responses and actions, meeting our clients' immediate needs promptly.",
    },
    {
      id: 3,
      image: handshake,
      heading: "Steadfast Commitment",
      text: "We're unwavering in our dedication to building sustainable tech solutions, upholding transparency, reliability, and excellence in all endeavors.",
    },
  ];
  return (
    <div className=" h-fit pb-[10rem]">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full mt-10 pb-0 md:pb-6 flex flex-col space-y-5 justify-center items-center">
            <Badge text="Our Values" className="text-primary" />
            <h2 className="text-lg md:text-4xl font-bold text-primary max-w-[300px] md:max-w-[485px] text-center font-metropolis">
              The fundamental principles guiding us
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-4/5 mt-5 md:mt-10 gap-[13px]">
            {features.map((data) => (
              <div
                key={data.id}
                className="max-h-[338px] h-fit max-w-[389px] p-6 bg-primary1 rounded-lg flex justify-center items-center flex-col"
              >
                <div className="bg-primary mt-6 w-fit rounded-full p-3">
                  <img
                    src={data.image}
                    alt=""
                    className="h-[55px] w-[60px] mx-auto "
                  />
                </div>
                <div className="py-7">
                  <h2 className="mb-2 text-xl font-semibold text-center">
                    {data.heading}
                  </h2>
                  <p className="text-[16px] text-center leading-7 text-[#4D4D4D]">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
