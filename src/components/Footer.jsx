import { LogoPrimaryBg2 } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Mission Statement */}
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          <p className="font-lato lg:text-left text-center text-lg">
            At Coast, our mission is to empower individuals and businesses,
            acting as the catalyst that bridges the gap between ambition and
            achievement with solutions and products tailored to make things run
            smoothly.
          </p>
        </div>

        {/* Links Section */}
        <div className="lg:w-1/3 flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10 lg:gap-16 justify-between">
          {/* Company Links */}
          <div>
            <h3 className="font-lato font-semibold mb-3 text-lg">Company</h3>
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
            <h3 className="font-lato font-semibold text-lg mb-3">Products</h3>
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
            <h3 className="font-lato font-semibold mb-3 text-lg">
              Our Socials
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#instagram" className="hover:text-primary3">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#x" className="hover:text-primary3">
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-primary3">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-primary3">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-16 flex justify-center">
        <img src={LogoPrimaryBg2} alt="Coast Group Logo" className="p-5" />
      </div>

      <div className="mt-16">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mb-2 sm:mb-0">© 2024 All Right Reserved</p>
          <div className="flex space-x-4">
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
