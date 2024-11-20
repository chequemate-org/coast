/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import SectionHeader from "./reusables/SectionHeader";

const ContactInfo = ({ icon: Icon, title, content, className = "" }) => {
  return (
    <div className="flex items-start gap-4 py-6 border-b border-[#E5E7EB]">
      <div className="text-primary mt-1">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
        <p className={`text-primary md:text-lg font-semibold ${className}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

const ContactSection = ({ sectionId }) => {
  return (
    <section id={sectionId} className="w-full auto px-6 py-16">
      <div className="flex flex-col w-full justify-between items-start">
        <SectionHeader className={"border-b-primary4 "} title="Contact Us" />

        <div className="lg:w-4/5 pl-[15%] flex lg:flex-row flex-col justify-between py-16 mt-5">
          <div className="flex flex-col">
            <p className="text-xl md:text-3xl  w-2/3 font-medium text-[#282828] mb-12">
              You can contact our support team via
            </p>
          </div>
          <div className="space-y-2">
            <ContactInfo
              icon={LuPhone}
              title="Call Us on"
              content="+234 7012345678"
              className="text-primary"
            />

            <ContactInfo
              icon={HiOutlineMail}
              title="Send us an Email"
              content="hello@coastgroup.tech"
              className="text-primary"
            />

            <ContactInfo
              icon={IoLocationOutline}
              title="Visit Us"
              content="Plot 162A, Independence Layout, Enugu, Enugu State."
              className="text-[#282828]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
