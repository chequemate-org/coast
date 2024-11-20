/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  preciousSamuel,
  semilore,
  sunita,
} from "../assets";
import Badge from "./reusables/Badge";

// TeamMemberSkeleton component
const TeamMemberSkeleton = () => {
  return (
    <div className="flex flex-col mb-6 animate-pulse">
      <div className="rounded-2xl overflow-hidden mb-3 bg-gray-200 aspect-square" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

// TeamMember component
const TeamMember = ({ name, position, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col mb-6">
      <div className="rounded-2xl overflow-hidden mb-3 aspect-square">
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        )}
        <img
          src={imageUrl}
          alt={name}
          className={`w-full aspect-square object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h3 className="text-base font-semibold text-gray-900 uppercase mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-600">{position}</p>
    </div>
  );
};

// TeamSection component
const TeamSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const teamMembers = [
    {
      name: "PRECIOUS SAMUEL",
      position: "Chief Operating Officer (COO)",
      imageUrl: preciousSamuel,
    },
    {
      name: "UGWUJA SUNITA",
      position: "Chief Financial Officer (CFO)",
      imageUrl: sunita,
    },
    // {
    //   name: "KOLADE ADEWUNMI",
    //   position: "PR / Media Manager",
    //   imageUrl: kolade,
    // },
    {
      name: "SEMILORE AKONI",
      position: "Chief Product Officer (CPO)",
      imageUrl: semilore,
    },
    // {
    //   name: "IRABOR OSASUMWEN",
    //   position: "Lead Graphics Designer",
    //   imageUrl: irabor,
    // },
    // {
    //   name: "EBERE AKPUCHE",
    //   position: "Owletonline Manager",
    //   imageUrl: ebere,
    // },
    // {
    //   name: "OLOLADE NIFEMI",
    //   position: "Strix General Manager",
    //   imageUrl: ololade,
    // },
    // {
    //   name: "DACHES DACHUNG",
    //   position: "Flyt Manager",
    //   imageUrl: daches,
    // },
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-6 mb-10">
        <Badge text="OUR TEAM" className="text-primary" />
        <h2 className="text-2xl md:text-4xl font-bold text-[#282828]">
          Meet our team of experts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => <TeamMemberSkeleton key={index} />)
          : teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
              />
            ))}
      </div>
    </section>
  );
};

export default TeamSection;
