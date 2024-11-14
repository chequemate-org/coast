import { HeroAboutImg } from "../assets";

const HeroAbout = () => {
  return (
    <div className="w-full h-auto px-[5%] py-4">
      <img src={HeroAboutImg} className="w-full" alt="hero about" />
    </div>
  );
};

export default HeroAbout;
