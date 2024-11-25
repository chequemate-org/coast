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
import NewsletterAbout from "../../components/NewsletterAbout";
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
          backgroundColor="#EEF3FF"
          headerStyling={`inline-block text-[#024BE4]`}
          backgroundImage={ComfortBg}
          badge="Comfort"
          description="Comfort is a premier payment and financial technology ecosystem designed to enable convenient and secure bill payments."
          imageUrl={Comfort}
          imageAlt="Comfort Mockup"
        />
        <ProductSection
          id="chequemate"
          link={"https://chequemateapp.com"}
          backgroundColor="#E1F4EB"
          headerStyling={`inline-block text-[#131D0E]`}
          backgroundImage={ChequemateBg}
          badge="Chequemate"
          description="Chequemate is a savings platform dedicated to helping raise funds for your chosen cause. Users can create groups with financial goals and share the rewards when objectives are met."
          imageUrl={chequemate}
          imageAlt="Chequemate Mockup"
        />
        <ProductSection
          id="quickshop"
          link={"https://getquickshop.com"}
          backgroundColor="#FFFAFA"
          headerStyling={"text-[#F02612]"}
          backgroundImage={QuickshopBg}
          badge="QUICKSHOP"
          description="Quickshop is an e-commerce marketplace that connects vendors and buyers, facilitating seamless transactions of goods."
          imageUrl={quickshop}
          imageAlt="quickshop Mockup"
        />
        <ProductSection
          id="puffer"
          link={"https://usepuffer.com"}
          backgroundColor="#F5FFFF"
          headerStyling={"text-[#208C8C]"}
          backgroundImage={PufferBg}
          badge="Puffer"
          description="Puffer is an online platform that connects businesses of all sizes with highly skilled, pre-vetted freelancers for short-term and long-term projects."
          imageUrl={puffer}
          imageAlt="Puffer Mockup"
          isLast={true}
        />
      </div>
      <NewsletterAbout sectionId={"join"} />

      <ContactSection sectionId={"contact"} />
      <Footer />
    </div>
  );
};

export default Home;
