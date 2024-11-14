import AboutSection from "../../components/AboutSection.";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAbout from "../../components/HeroAbout";

const About = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroAbout />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
