import { HeroAboutImg, HeroAboutImgM } from "../assets";

const HeroAbout = () => {
  return (
    <div className="w-full mt-[15%] md:my-[5%] px-[5%] py-4">
      <img
        src={HeroAboutImg}
        className="hidden md:block w-full h-[500px] object-cover"
        alt="hero about desktop"
      />
      <img
        src={HeroAboutImgM}
        className="block md:hidden w-full h-[300px] object-contain"
        alt="hero about mobile"
      />
    </div>
  );
};

export default HeroAbout;
