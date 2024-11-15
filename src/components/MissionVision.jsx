import { missionImg } from "../assets";
import Badge from "./reusables/Badge";

const MissionVision = () => {
  return (
    <section className="bg-primary5 text-white py-16 px-8 md:px-16 lg:px-32 flex flex-col items-center gap-8">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <Badge text="MISSION & VISION" className="text-primary w-fit" />
        <h2 className="text-3xl font-bold text-center">
          Rise above the flock with COAST
        </h2>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="lg:w-1/2 text-[13px] lg:text-[24px] space-y-6">
          <p className="text-gray-200">
            COAST aims to offer top-notch social media growth services,
            connecting people, businesses, and brands organically and
            innovatively. Our goal is a motivated team embracing technology for
            excellence.
          </p>
          <p className="text-gray-200">
            Striving to become a leading, technology-driven, eco-friendly
            institution. Committed to excellence, innovation, and personalized
            service and aiming to become the world&apos;s commerce center.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={missionImg}
            alt="Man extending a handshake"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
