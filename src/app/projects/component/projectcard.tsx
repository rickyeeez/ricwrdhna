import React from "react";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import Image from "next/image";
import TechCard from "./techcard";
import { RxLink2 } from "react-icons/rx";
import { BsGithub, BsYoutube } from "react-icons/bs";
type Props = {
  device: "mobile" | "desktop" | "web";
  linkImg?: string;
  title?: string;
  subtitle?: string;
  youtube?: boolean;
  tech: string[];
  linkYoutube?: string;
  linkDefault?: string;
  linkGithub?: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="w-80 h-[400px] bg-[#57585D] animate-fade-up rounded-2xl flex flex-col drop-shadow-md bg-opacity-50 hover:bg-opacity-100 duration-200 transition-opacity">
      <div className="w-full flex justify-between h-auto px-4 py-1.5 items-center mb-2">
        <div className="space-x-2 w-full flex ">
          <span className="w-3 flex h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 flex h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 flex h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex justify-center items-center text-sm font-light">
          {props.device === "web" && (
            <>
              <CgWebsite className="h-full w-4 me-2 flex justify-center items-center text-center"></CgWebsite>
              Website
            </>
          )}
          {props.device === "mobile" && (
            <>
              <CiMobile3 className="h-full w-4 me-2 flex justify-center items-center text-center"></CiMobile3>
              Mobile
            </>
          )}
          {props.device === "desktop" && (
            <>
              <CgWebsite className="h-full w-4 me-2 flex justify-center items-center text-center"></CgWebsite>
              Website
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <p>{props.title}</p>
        <small className="text-xs">* {props.subtitle}</small>
      </div>
      <div className="w-full mt-2 justify-center items-center flex">
        <Image
          src={`/assets/projects_img/${props.linkImg}`}
          width={1200}
          height={700}
          quality={100}
          className="object-contain h-40 w-full rounded px-4"
          alt="Picture Logo"
        />
      </div>
      <div className="mt-4 flex flex-row flex-wrap px-2 items-center justify-center space-x-2">
        {props.tech.map((element, index) => (
          <TechCard key={index} tech={element} />
        ))}
      </div>
      <div className="absolute  bottom-2 right-2">
        <div className="flex h-8 flex-row space-x-4">
          {props.linkDefault !== undefined && (
            <a target="_blank" href={`${props.linkDefault}`}>
              <RxLink2 className=" flex justify-center items-center text-2xl cursor-pointer hover:text-blue-400 text-center"></RxLink2>
            </a>
          )}
          {props.linkGithub !== undefined && (
            <>
              <a target="_blank" href={`${props.linkGithub}`}>
                <BsGithub className=" flex justify-center items-center text-2xl cursor-pointer hover:text-slate-800 text-center"></BsGithub>
              </a>
            </>
          )}
          {props.linkYoutube !== undefined && (
            <>
              <a target="_blank" href={`${props.linkYoutube}`}>
                <BsYoutube className="  flex justify-center items-center text-2xl cursor-pointer hover:text-[#ff0000] text-center"></BsYoutube>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
