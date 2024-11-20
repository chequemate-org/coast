import {
  chequemate,
  ChequemateBg,
  Comfort,
  ComfortBg,
  puffer,
  PufferBg,
  quickshop,
  QuickshopBg,
} from "../../assets";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import OurProducts from "../../components/OurProducts";
import ProductSection from "../../components/ProductsCustom";
import WhoWeAre from "../../components/WhoWeAre";

const Home = () => {
  return (
    <div className="w-full relative">
      <div className="relative z-20">
        <Header joinId={"join"} />
        <HeroSection />
        <WhoWeAre />
      </div>
      <OurProducts sectionId={"products"} />
      <div className="relative">
        <ProductSection
          id="comfort"
          link={"https://usecomfort.com"}
          backgroundColor="#024BE4"
          headerStyling={`inline-block text-[#F1F6FA]`}
          backgroundImage={ComfortBg}
          badge="Comfort"
          description="Comfort is a premier payment and financial technology ecosystem designed to enable convenient and secure bill payments."
          imageUrl={Comfort}
          imageAlt="Comfort Mockup"
        />
        <ProductSection
          id="chequemate"
          link={"https://chequemateapp.com"}
          backgroundColor="#141F0F"
          headerStyling={`inline-block text-[#F1F6FA]`}
          backgroundImage={ChequemateBg}
          badge="Chequemate"
          description="Chequemate is a savings platform dedicated to helping raise funds for your chosen cause. Users can create groups with financial goals and share the rewards when objectives are met."
          imageUrl={chequemate}
          imageAlt="Chequemate Mockup"
        />
        <ProductSection
          id="quickshop"
          link={"https://getquickshop.com"}
          backgroundColor="#FF3C29"
          headerStyling={"text-[#F7FFFF]"}
          backgroundImage={QuickshopBg}
          badge="QUICKSHOP"
          description="Quickshop is an e-commerce marketplace that connects vendors and buyers, facilitating seamless transactions of goods."
          imageUrl={quickshop}
          imageAlt="quickshop Mockup"
          isLast={true}
        />
        <ProductSection
          id="puffer"
          link={"https://usepuffer.com"}
          backgroundColor="#008080"
          headerStyling={"text-[#F7FFFF]"}
          backgroundImage={PufferBg}
          badge="Puffer"
          description="Puffer is an online platform that connects businesses of all sizes with highly skilled, pre-vetted freelancers for short-term and long-term projects."
          imageUrl={puffer}
          imageAlt="Puffer Mockup"
        />
      </div>
      <div
        id="join"
        className="bg-primary w-full flex justify-center items-center flex-col gap-6 py-[10%] lg:pt-[5%] px-6 text-white h-fit lg:pb-8"
      >
        <h2 className="pb-2 text-3xl md:text-5xl lg:text-7xl ">
          JOIN OUR NEWSLETTER
        </h2>
        <p className="text-sm lg:text-2xl">
          We&apos;ll send you a nice letter once per week. No spam.
        </p>
        <div className="flex items-center w-full lg:w-1/3 overflow-hidden mb-[5%] bg-primary1 rounded-md text-primary">
          <input
            type="text"
            className="outline-none bg-primary1 w-[100%] py-4 px-3 flex-grow placeholder:text-primary5 placeholder:text-lg"
            placeholder="email address"
          />

          <button className="block text-white bg-primary py-[11px] px-6 mr-1 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <ContactSection sectionId={"contact"} />
      <Footer />
    </div>
  );
};

export default Home;
