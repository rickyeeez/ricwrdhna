import React from "react";
import Image from "next/image";
type Props = {
  count: string;
};

const TechCard = (props: Props) => {
  return (
    <div className="w-full h-full justify-center items-center flex">
      <div className="w-48 h-16  me-2 shadow-[1px_6px_4px_0px_#494747] opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out cursor-pointer rounded px-12 mt-6 justify-center items-center flex bg-white  ">
        <Image
          src={`/assets/logo/${props.count}.png`}
          width={140}
          height={48}
          className="object-contain w-full h-full"
          alt="Picture Logo"
        />
      </div>
    </div>
  );
};

export default TechCard;
