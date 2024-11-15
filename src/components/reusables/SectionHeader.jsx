/* eslint-disable react/prop-types */
const SectionHeader = ({ title, className }) => {
  return (
    <div className={`px-[5%] pb-6 border-b-[1px] w-full h-fit ${className}`}>
      <h2 className="text-5xl md:text-7xl text-primary mb-6">{title}</h2>
    </div>
  );
};

export default SectionHeader;
