/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import SectionHeader from "./reusables/SectionHeader";

const ContactInfo = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex border-b pb-5 items-start gap-4 mb-8">
      <div className="text-primary mt-1">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-700 mb-1">{title}</h3>
        <p className="text-primary font-semibold text-base">{content}</p>
      </div>
    </div>
  );
};

const ContactSection = ({ sectionId }) => {
  return (
    <section id={sectionId} className="w-full px-4 py-16 bg-white">
      <SectionHeader className={"border-b-primary4 "} title="Contact Us" />

      <div className="flex md:flex-row flex-col justify-between  w-full gap-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-8 pt-[5%] md:w-1/2 px-[5%]">
          <h2 className="text-2xl font-medium text-gray-900 mb-12 md:w-1/3">
            You can contact our support team via
          </h2>

          <ContactInfo
            icon={LuPhone}
            title="Call Us on"
            content="+234 7012345678"
          />

          <ContactInfo
            icon={HiOutlineMail}
            title="Send us an Email"
            content="hello@coastgroup.tech"
          />

          <ContactInfo
            icon={IoLocationOutline}
            title="Visit Us"
            content="Plot 162A, Independence Layout, Enugu, Enugu State."
          />
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-50 py-[5%] px-8 rounded-lg md:w-1/2">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g John Doe"
                className="w-full px-4 py-3 rounded-lg border-b bg-transparent border-gray-300 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g johndoe@gmail.com"
                className="w-full px-4 py-3 rounded-lg border-b bg-transparent border-gray-300 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={1}
                placeholder="type a message"
                className="w-full px-4 py-3 bg-transparent rounded-lg border-b border-gray-300 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="w-full flex justify-end items-end pt-5">
              <button
                type="submit"
                className="md:w-1/3 w-full bg-primary text-white py-3 px-6 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
