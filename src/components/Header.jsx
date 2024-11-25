import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaAngleDown, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { logo, LogoPrimaryBg } from "../assets";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (isMobile = false) => {
    if (isMobile) {
      setMobileDropdownOpen(!mobileDropdownOpen);
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleLinkClick = (sectionId) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);

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

  // Handle clicks outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white mb-[10%] w-full shadow-md py-2 fixed top-0 left-0 z-50">
      <nav className="px-[8%] py-4">
        <div className="max-w-[1440px] flex justify-between items-center w-full">
          <div
            onClick={() => handleLinkClick("home")}
            className="py-1 cursor-pointer h-9"
          >
            <img src={logo} alt="logo" className="h-full" />
          </div>
          <ul className="lg:flex text-base hidden space-x-8 font-medium">
            <li className="relative group">
              <button
                ref={dropdownButtonRef}
                onClick={() => toggleDropdown()}
                className="cursor-pointer transition-colors duration-300 hover:text-primary active:text-primary flex items-center gap-1"
              >
                Product{" "}
                <FaAngleDown
                  className={`transform transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10 py-1"
                >
                  <a
                    onClick={() => handleLinkClick("comfort")}
                    className="block px-4 py-3 text-gray-600 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Comfort
                  </a>
                  <a
                    onClick={() => handleLinkClick("chequemate")}
                    className="block px-4 py-3 text-gray-600 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Chequemate
                  </a>
                  <a
                    onClick={() => handleLinkClick("puffer")}
                    className="block px-4 py-3 text-gray-600 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Puffer
                  </a>
                  <a
                    onClick={() => handleLinkClick("quickshop")}
                    className="block px-4 py-3 text-gray-600 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    Quickshop
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("about-us")}
                className="cursor-pointer transition-colors duration-300 hover:text-primary active:text-primary"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("what-s-new")}
                className="cursor-pointer transition-colors duration-300 hover:text-primary active:text-primary"
              >
                What&apos;s New?
              </a>
            </li>
          </ul>
          <button
            className="bg-primary text-white w-fit px-8 text-[16px] py-4 rounded-full hover:bg-primary5 lg:flex hidden uppercase font-semibold"
            onClick={() => handleLinkClick("join")}
          >
            Join Our Newsletter
          </button>
          <div className="lg:hidden flex items-center">
            <button className="text-2xl" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <IoMenuOutline />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-teal-800 text-white p-6 z-20 overflow-y-auto">
          <div className="flex items-center justify-between">
            <img src={LogoPrimaryBg} alt="logo" className="h-10" />
            <button className="text-2xl" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
          <nav className="mt-16 space-y-7 text-lg font-semibold">
            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleDropdown(true)}
                className="cursor-pointer flex w-full justify-between items-center space-x-1"
              >
                <span>Products</span>
                {mobileDropdownOpen ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {mobileDropdownOpen && (
              <div className="space-y-4 text-md font-normal">
                <a
                  onClick={() => handleLinkClick("comfort")}
                  className="block cursor-pointer"
                >
                  Comfort
                </a>
                <a
                  onClick={() => handleLinkClick("chequemate")}
                  className="block cursor-pointer"
                >
                  Chequemate
                </a>
                <a
                  onClick={() => handleLinkClick("puffer")}
                  className="block cursor-pointer"
                >
                  Puffer
                </a>
                <a
                  onClick={() => handleLinkClick("quickshop")}
                  className="block cursor-pointer"
                >
                  Quickshop
                </a>
              </div>
            )}
            <a
              onClick={() => handleLinkClick("about-us")}
              className="block cursor-pointer"
            >
              About Us
            </a>
            <a
              onClick={() => handleLinkClick("what-s-new")}
              className="block cursor-pointer"
            >
              What&apos;s New?
            </a>
            <button className="bg-primary1 text-primary py-3 px-6 rounded-full font-semibold my-6">
              Join Our Newsletter
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
