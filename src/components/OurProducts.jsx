/* eslint-disable react/prop-types */
const OurProducts = ({ sectionId }) => {
  return (
    <div id={sectionId} className="lg:w-full w-5/6 space-y-4 bg-white h-fit py-16 px-[5%] lg:max-w-[750px]">
      <h2 className={`inline-block capitalize text-5xl font-bold`}>
        Our Products
      </h2>
      <h4 className="text-[#4D4D4D] leading-8">
        Check out some of our amazing products and services and also, be on the
        lookout for new products we will be unveiling soon.
      </h4>
    </div>
  );
};

export default OurProducts;
