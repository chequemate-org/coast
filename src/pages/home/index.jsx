import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import WhoWeAre from "../../components/WhoWeAre";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default Home;
