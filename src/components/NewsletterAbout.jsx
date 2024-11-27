/* eslint-disable react/prop-types */
const NewsletterAbout = ({ sectionId }) => {
  return (
    <div
      id={sectionId}
      className="w-full bg-primary md:space-y-10 h-fit py-16 min-h-[400px] md:min-h-[567px] flex flex-col justify-center items-center"
    >
      <h2 className="md:pb-2 pb-5 text-[28px] px-6 lg:text-7xl text-white uppercase md:font-extralight font-semibold">
        Join our newsletter
      </h2>
      <p className="text-white pb-14 px-3 text-base lg:text-2xl">
        We&apos;ll send you a nice letter once per week. No spam.
      </p>
      <div className="lg:w-1/3 w-full px-5 lg:pb-8">
        <div className="flex items-center w-full overflow-hidden p-1 bg-primary1 rounded-md">
          <input
            type="text"
            className="outline-none bg-primary1 w-full py-[13px] px-2 flex-grow"
            placeholder="email address"
          />

          <button className="block text-white bg-primary py-[11px] px-6 mr-[2px] rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAbout;
