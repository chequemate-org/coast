import AboutSection from "../../components/AboutSection.";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAbout from "../../components/HeroAbout";
import MissionVision from "../../components/MissionVision";
import NewsletterAbout from "../../components/NewsletterAbout";
import Features from "../../components/Values";

const About = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroAbout />
      <AboutSection />
      <MissionVision />
      <Features />
      {/* <TeamSection /> */}
      <NewsletterAbout />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
