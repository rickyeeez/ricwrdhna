import React from "react";
import Image from "next/image";
type Props = {
  experience_name: string;
  experience_start: string;
  experience_end: string;
  experience_role: string;
  experience_description: string[];
  experience_logo: string;
};

const ExperienceCard = (props: Props) => {
  return (
    <div className="w-full h-auto bg-[#57585D] rounded flex flex-col drop-shadow-md bg-opacity-50 hover:bg-opacity-100 duration-200 transition-opacity p-6">
      <div className="grid grid-cols-2">
        {" "}
        <h3 className="text-lg font-semibold">{props.experience_name}</h3>
        <p className="text-md text-end text-gray-300">
          {props.experience_start} - {props.experience_end}
        </p>
      </div>
      <p className="text-sm text-gray-300">{props.experience_role}</p>
      <div className="grid grid-cols-3">
        <span className="text-gray-300 col-span-3 lg:col-span-2 mt-3  border-gray-300 mb-2">
          <ul className="list-disc  ps-4 space-y-1">
            {props.experience_description.map((desc, index) => (
              <li key={index} className="text-sm text-justify text-gray-300">
                {desc}
              </li>
            ))}
          </ul>
        </span>
        <span className="text-gray-300 col-span-1 justify-end lg:flex hidden items-start">
          <Image
            src={props.experience_logo}
            width={200}
            height={123}
            className="absolute "
            alt="Picture of the author"
          />
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
