import { Comfort } from "../../assets";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ProductSection from "../../components/ProductsCustom";
import WhoWeAre from "../../components/WhoWeAre";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <ProductSection
        backgroundColor="#024BE4"
        headerStyling={`inline-block text-white`}
        backgroundImage={"/mnt/data/Comfort.png"}
        badge="Comfort"
        description="Comfort is a premier payment and financial technology ecosystem designed to enable convenient and secure bill payments."
        imageUrl={Comfort}
        imageAlt="Comfort Mockup"
      />
      <ProductSection
        backgroundColor="#035a52"
        backgroundImage={"/mnt/data/Puffer.png"}  // Background image file path
        badge="Puffer"
        description="Puffer is an online platform that connects businesses of all sizes with highly skilled, pre-vetted freelancers for short-term and long-term projects."
        imageUrl={Comfort}
        imageAlt="Puffer Mockup"
      />
      <Footer />
    </div>
  );
};

export default Home;
