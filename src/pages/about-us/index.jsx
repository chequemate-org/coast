import AboutSection from "../../components/AboutSection.";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAbout from "../../components/HeroAbout";
import NewsletterAbout from "../../components/NewsletterAbout";
import TeamSection from "../../components/TeamSection";
import Features from "../../components/Values";

const About = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroAbout />
      <AboutSection />
      <Features />
      <TeamSection />
      <NewsletterAbout />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
