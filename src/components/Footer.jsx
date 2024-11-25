import { FaInstagram, FaYoutube } from "react-icons/fa";
import { LogoPrimaryBg2 } from "../assets";
import { FaLinkedinIn, FaX } from "react-icons/fa6";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (sectionId) => {
    if (sectionId === "about-us") {
      navigate(`/${sectionId}`);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-primary text-white pt-12 pb-4 z-100">
      {/* Mobile Footer */}
      <div className="lg:hidden px-7">
        <Link to={"/"}>
          <div className="flex justify-center">
            <img
              src={LogoPrimaryBg2}
              alt="Coast Group Logo"
              className="w-52 p-5"
            />
          </div>
        </Link>
        <p className="text-center leading-8 text-lg mb-12">
          At Coast, our mission is to empower individuals and businesses, acting
          as the catalyst that bridges the gap between ambition and achievement
          with solutions and products tailored to make things run smoothly.
        </p>

        {/* Columns Container */}
        <div className="grid grid-cols-2 gap-x-[20%] gap-y-14 pl-5">
          {/* Company Section */}
          <div className="w-full">
            <h3 className="font-semibold mb-3 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="hover:text-primary3">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("products")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("contact")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="w-full">
            <h3 className="font-semibold mb-3 text-lg">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={() => handleLinkClick("comfort")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Comfort
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("chequemate")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Chequemate
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("puffer")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Puffer
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("quickshop")}
                  className="hover:text-primary3 cursor-pointer"
                >
                  Quickshop
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-full">
            <h3 className="font-semibold mb-3 text-lg">Our Socials</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary3 flex items-center gap-2"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary3 flex items-center gap-2"
                >
                  <FaX /> X (formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary3 flex items-center gap-2"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary3 flex items-center gap-2"
                >
                  <FaYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full">
            <h3 className="font-semibold mb-3 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#terms" className="hover:text-primary3">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary3">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cookie" className="hover:text-primary3">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden max-w-[1540px] lg:block container mx-auto px-[5%] pt-10">
        {/* Top Section */}
        <div className="flex w-full justify-between items-start">
          <div className="flex md:w-2/3 max-w-[1540px] flex-col justify-between items-start">
            {/* Logo Section - Shown on both */}
            <Link to={"/"}>
              <div className="flex justify-center mb-8">
                <img
                  src={LogoPrimaryBg2}
                  alt="Coast Group Logo"
                  className="w-40"
                />
              </div>
            </Link>
            {/* Mission Statement */}
            <div className="w-1/2">
              <p className="text-base">
                At Coast, our mission is to empower individuals and businesses,
                acting as the catalyst that bridges the gap between ambition and
                achievement with solutions and products tailored to make things
                run smoothly.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex md:w-[40%] gap-20">
            <div>
              <h3 className="font-semibold mb-3 text-base">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => handleLinkClick("about-us")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleLinkClick("products")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleLinkClick("contact")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => handleLinkClick("comfort")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    Comfort
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleLinkClick("chequemate")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    Chequemate
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleLinkClick("puffer")}
                    className="hover:text-primary3 cursor-pointer"
                  >
                    Puffer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-base">Our Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#instagram"
                    className="hover:text-primary3 flex items-center gap-2"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#x"
                    className="hover:text-primary3 flex items-center gap-2"
                  >
                    <FaX /> X (formerly Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="#linkedin"
                    className="hover:text-primary3 flex items-center gap-2"
                  >
                    <FaLinkedinIn />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#youtube"
                    className="hover:text-primary3 flex items-center gap-2"
                  >
                    <FaYoutube /> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Different styles for mobile and desktop */}
      <div className="container max-w-[1540px] mx-auto px-[5%] pt-[10%]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm mb-4 lg:mb-0">
            © 2024 All Right Reserved
          </p>

          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a href="#terms" className="hover:text-primary3">
              Terms of Service
            </a>
            <span>/</span>
            <a href="#privacy" className="hover:text-primary3">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#cookie" className="hover:text-primary3">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
