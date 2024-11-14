import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

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
}) => {
  return (
    <section
      className={`pt-16 border-y-[1px] border-black my-16 h-full`}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`px-[5%] flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } pt-5 justify-between`}
      >
        <div className="lg:w-1/2 px-[5%] pt-[5%] space-y-9 text-center lg:text-left">
          <div className={`inline-block uppercase ${headerStyling} text-5xl font-bold`}>
            {badge}
          </div>
          <p className="lg:text-[24px] max-w-[460px] text-white leading-[60px]">{description}</p>
          <button className="bg-primary1 text-primary font-lato font-bold px-6 py-3 rounded-full uppercase w-full lg:w-[240px] hover:bg-primary4 transition flex items-center justify-center gap-2">
            {buttonText} <FaArrowRight />
          </button>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
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
};

export default ProductSection;