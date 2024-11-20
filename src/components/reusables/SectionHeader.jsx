/* eslint-disable react/prop-types */
const SectionHeader = ({ title, className }) => {
  return (
    <div className={`pb-6 border-b-[1px] w-full h-fit ${className}`}>
    <div className={`w-full max-w-[1440px] px-[5%]`}>
      <h2 className="text-5xl md:text-7xl text-primary mb-6">{title}</h2>
    </div>
    </div>
  );
};

export default SectionHeader;
