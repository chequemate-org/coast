import { FaInstagram, FaYoutube } from "react-icons/fa";
import { LogoPrimaryBg2 } from "../assets";
import { FaLinkedinIn, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      {/* Mobile Footer */}
      <div className="lg:hidden container mx-auto px-">
        <p className="text-center leading-8 text-lg mb-12">
          At Coast, our mission is to empower individuals and businesses, acting
          as the catalyst that bridges the gap between ambition and achievement
          with solutions and products tailored to make things run smoothly.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary3">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary3">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary3">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#comfort" className="hover:text-primary3">
                  Comfort
                </a>
              </li>
              <li>
                <a href="#chequemate" className="hover:text-primary3">
                  Chequemate
                </a>
              </li>
              <li>
                <a href="#puffer" className="hover:text-primary3">
                  Puffer
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Our Socials</h3>
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

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Legal</h3>
            <ul className="space-y-2">
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
      <div className="hidden lg:block container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Mission Statement */}
          <div className="w-1/3">
            <p className="text-lg">
              At Coast, our mission is to empower individuals and businesses,
              acting as the catalyst that bridges the gap between ambition and
              achievement with solutions and products tailored to make things
              run smoothly.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-24">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-primary3">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary3">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary3">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#comfort" className="hover:text-primary3">
                    Comfort
                  </a>
                </li>
                <li>
                  <a href="#chequemate" className="hover:text-primary3">
                    Chequemate
                  </a>
                </li>
                <li>
                  <a href="#puffer" className="hover:text-primary3">
                    Puffer
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Our Socials</h3>
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

      {/* Logo Section - Shown on both */}
      <div className="flex justify-center my-16">
        <img src={LogoPrimaryBg2} alt="Coast Group Logo" className="w-64 p-5" />
      </div>

      {/* Footer Bottom - Different styles for mobile and desktop */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm mb-4 lg:mb-0">
            © 2024 All Right Reserved
          </p>

          {/* Legal links with slashes - Only shown on desktop */}
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
