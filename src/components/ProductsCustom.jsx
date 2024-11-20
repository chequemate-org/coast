/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { useRef, useEffect } from "react";

const ProductSection = ({
  id,
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

      const isInView = rect.top <= viewportHeight && rect.bottom >= 0;

      if (isInView) {
        section.style.opacity = 1;
        section.style.transform = `translateY(0)`;
      } else {
        if (rect.top > viewportHeight) {
          section.style.opacity = 0;
          section.style.transform = `translateY(20px)`;
        } else if (rect.bottom < 0 && !isLast) {
          section.style.opacity = 0;
          section.style.transform = `translateY(-20px)`;
        }
      }

      if (isLast && rect.bottom <= viewportHeight) {
        section.style.opacity = 1;
        section.style.transform = `translateY(0)`;
        section.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLast]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`w-full px-[2%] min-h-screen transition-all duration-500 ease-out ${
        isLast ? "relative" : "sticky top-0"
      }`}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      <div className="w-full h-full flex">
        {/* Content Section */}
        <div
          className={`w-full h-full flex flex-col justify-between ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center`}
        >
          <div className="lg:w-1/2 space-y-8 text-left lg:px-16 pt-24">
            <h2
              className={`uppercase ${headerStyling} text-4xl lg:text-6xl font-bold tracking-tight`}
            >
              {badge}
            </h2>
            <p className="lg:text-[24px] text-[18px] max-w-[460px] text-white lg:leading-[60px] leading-[40px]">
              {description}
            </p>
            <button className="bg-primary1 text-primary font-bold px-8 py-4 rounded-full uppercase hover:bg-primary4 transition flex items-center justify-center gap-3 text-lg w-full sm:w-auto">
              {buttonText} <FaArrowRight />
            </button>
          </div>

          <div className="lg:w-1/2 lg:pt-[10%] pt-[20%] h-full relative flex items-end">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
