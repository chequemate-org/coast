/* eslint-disable react/prop-types */
const Badge = ({ text, className }) => {
  return (
    <span
      className={`text-primary px-5 py-3 bg-primary1 uppercase rounded-full font-bold ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
