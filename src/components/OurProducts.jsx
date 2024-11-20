/* eslint-disable react/prop-types */
const OurProducts = ({ sectionId }) => {
  return (
    <div
      id={sectionId}
      className="w-5/6 max-w-[1440px] bg-white h-fit py-16 px-[5%] lg:w-full"
    >
    <div
      className="space-y-4 lg:w-[750px]"
    >
      <h2 className={`inline-block capitalize text-5xl font-bold`}>
        Our Products
      </h2>
      <h4 className="text-[#4D4D4D] leading-8">
        Check out some of our amazing products and services and also, be on the
        lookout for new products we will be unveiling soon.
      </h4>
    </div>
    </div>
  );
};

export default OurProducts;
