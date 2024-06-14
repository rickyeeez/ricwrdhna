import React from "react";

type Props = {
  tech: string;
};

const TechCard = (props: Props) => {
  return (
    <small className="px-2 flex justify-center items-center mt-2 py-0.5 bg-neutral-300 text-neutral-100 bg-opacity-40 rounded-full">
      {props.tech}
    </small>
  );
};

export default TechCard;
