import { chequemate, ChequemateBg, Comfort, ComfortBg, puffer, PufferBg } from "../../assets";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ProductSection from "../../components/ProductsCustom";
import WhoWeAre from "../../components/WhoWeAre";

const Home = () => {
  return (
    <div className="w-full relative">
      <div className="relative z-20">
        <Header />
        <HeroSection />
        <WhoWeAre />
      </div>

      <div className="relative" style={{ height: `${100 * 3 + 50}vh` }}>
        <ProductSection
          backgroundColor="#024BE4"
          headerStyling={`inline-block text-[#F1F6FA]`}
          backgroundImage={ComfortBg}
          badge="Comfort"
          description="Comfort is a premier payment and financial technology ecosystem designed to enable convenient and secure bill payments."
          imageUrl={Comfort}
          imageAlt="Comfort Mockup"
        />
        <ProductSection
          backgroundColor="#141F0F"
          headerStyling={`inline-block text-[#F1F6FA]`}
          backgroundImage={ChequemateBg}
          badge="Chequemate"
          description="Chequemate is a savings platform dedicated to helping raise funds for your chosen cause. Users can create groups with financial goals and share the rewards when objectives are met."
          imageUrl={chequemate}
          imageAlt="Chequemate Mockup"
        />
        <ProductSection
          backgroundColor="#008080"
          headerStyling={"text-[#F7FFFF]"}
          backgroundImage={PufferBg}
          badge="Puffer"
          description="Puffer is an online platform that connects businesses of all sizes with highly skilled, pre-vetted freelancers for short-term and long-term projects."
          imageUrl={puffer}
          imageAlt="Puffer Mockup"
          isLast={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
