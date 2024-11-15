import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { logo, LogoPrimaryBg } from "../assets";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setMenuOpen(false);

    if (sectionId === "about-us" || sectionId === "what-s-new") {
      navigate(`/${sectionId}`);
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white w-full shadow-md py-2">
      <nav className="px-[8%] flex justify-between items-center py-4">
        <div
          onClick={() => handleLinkClick("home")}
          className="py-1 cursor-pointer h-10"
        >
          <img src={logo} alt="logo" className="h-full" />
        </div>
        <ul className="lg:flex text-lg hidden space-x-8  font-semibold">
          <li className="relative group">
            <a
              onClick={() => handleLinkClick("products")}
              className="cursor-pointer transition-colors duration-300 hover:text-primary active:text-primary"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Product <FaAngleDown className="inline" />
            </a>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  onClick={() => handleLinkClick("comfort")}
                  className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white"
                >
                  Comfort
                </a>
                <a
                  onClick={() => handleLinkClick("chequemate")}
                  className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white"
                >
                  Chequemate
                </a>
                <a
                  onClick={() => handleLinkClick("puffer")}
                  className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white"
                >
                  Puffer
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
        <button className="bg-primary text-white  w-fit px-8 text-md py-2 rounded-full hover:bg-primary5 lg:flex hidden uppercase font-semibold">
          Join Our Newsletter
        </button>
        <div className="lg:hidden flex items-center">
          <button className="text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full bg-teal-800 text-white p-6 z-20">
          <div className="flex items-center justify-between">
            <img src={LogoPrimaryBg} alt="logo" className="h-10" />
            <button className="text-2xl" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
          <nav className="mt-16 space-y-7 text-lg font-semibold">
            <div className="flex items-center justify-between">
              <a
                onClick={toggleDropdown}
                className="cursor-pointer flex w-full justify-between items-center space-x-1"
              >
                <span>Products</span>
                {dropdownOpen ? <FaMinus /> : <FaPlus />}
              </a>
            </div>
            {dropdownOpen && (
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
