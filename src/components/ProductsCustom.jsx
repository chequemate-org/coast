import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const ProductSection = ({
  badge,
  description,
  buttonText = "Get Started",
  imageUrl,
  imageAlt,
  reversed = false,
  headerStyling,
  backgroundColor,
  backgroundImage,
  isLast = false,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = 1 - rect.top / viewportHeight;

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        section.style.opacity = 1;
        section.style.transform = `translateY(0)`;
      } else if (isLast) {
        // Ensure the last section stays visible
        const bottomOffset = window.innerHeight - rect.bottom;
        if (bottomOffset >= 0) {
          section.style.opacity = 1;
          section.style.transform = `translateY(0)`; // Keep it fixed
        } else {
          section.style.opacity = Math.max(0, 1 - Math.abs(scrollProgress - 1));
          section.style.transform = `translateY(0)`;
        }
      } else {
        section.style.opacity = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLast]);

  return (
    <section
      ref={sectionRef}
      className={`sticky top-0 w-full h-screen transition-all md:pt-[10%] pt-[15%] duration-500 ease-out ${
        isLast ? "mb-0" : ""
      }`}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: isLast ? 1 : 10,
      }}
    >
      <div
        className={`px-[5%] flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } pt-5 justify-between h-full items-center`}
      >
        <div className="lg:w-1/2 px-[5%] lg:pt-[10%] space-y-9 text-left">
          <div
            className={`inline-block uppercase ${headerStyling} text-5xl font-bold`}
          >
            {badge}
          </div>
          <p className="lg:text-[24px] text-[18px] max-w-[460px] text-white lg:leading-[60px] leading-[40px]">
            {description}
          </p>
          <button className="bg-primary1 text-primary font-bold px-6 py-3 rounded-full uppercase w-full lg:w-[240px] hover:bg-primary4 transition flex items-center justify-center gap-2">
            {buttonText} <FaArrowRight />
          </button>
        </div>

        <div className="mt-12 lg:-mt-9 lg:w-1/2 flex justify-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="max-w-full w-full object-contain"
            style={{ imageRendering: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

ProductSection.propTypes = {
  badge: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headerStyling: PropTypes.string,
  reversed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  isLast: PropTypes.bool,
};

export default ProductSection;
